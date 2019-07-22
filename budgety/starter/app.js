let budgetController = (function(){
    
    let Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }else{
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    let Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
  
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    let calculateTotal = function(type){
        let sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItem: function(type, des, val){
            let newItem, ID;
            

            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }else{
                ID = 0;
            }

            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },

        deleteItem: function(type, id){
            let ids, index;

            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function(){
            // calculate total income and express
            calculateTotal('inc');
            calculateTotal('exp');
            // Calculate the budget: income - expense

            data.budget = data.totals.inc - data.totals.exp;
            // calculate the percentage of income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
        },
        
       calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
               cur.calcPercentage(data.totals.inc);
            });
       },
       getPercentages: function(){
            let allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
       },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function(){
            console.log(data);
        } 
    };



})();


//////////////////////////////////////////////////////////

let UIController = (function(){
    //
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentagelabel: '.budget__expenses--percentage',
        container: '.container',
        expensePerLabel: '.item__percentage',
        dateLabel: '.budget__title--month' 
    };

    let formatNumber = function(num, type){
        let numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

   };
    let nodeListForEach = function(list, callback){
        for(let i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };

    return {
        getInput: function(){

            return {
                 type: document.querySelector(DOMstrings.inputType).value,
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function(obj, type){
            // Create HTML string with placeholder text
            let html, newHtml, element;
            
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;

                html = `<div class="item clearfix" id="inc-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`;
            }else if(type === 'exp'){
                element = DOMstrings.expensesContainer;

                html = `<div class="item clearfix" id="exp-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`;
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteItem: function(selectorID){
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function(){
            let fields, fieldArr;

           fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

           fieldArr = Array.prototype.slice.call(fields);

           fieldArr.forEach(function(current, index, array){
                current.value = "";
           });

           fieldArr[0].focus();

        },

        displayBudget: function(obj){
            let type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent =   formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');

            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentagelabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentagelabel).textContent = '----';
            }
        },

       displayPercentages: function(percentages){
            let fields = document.querySelectorAll(DOMstrings.expensePerLabel);

            nodeListForEach(fields, function(current, index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }else{
                    current.textContent = '---';
                }
            });
       },

       displayMonth: function(){
           let now, year, months, month;
           now = new Date;
           
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

           year = now.getFullYear();
           month = now.getMonth();
           document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
       },

       changedType: function(){
          let fields =  document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            );
            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
                //console.log(cur);
            }); 
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
       },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    


})();


///////////////////////////////////////////////


let controller = (function(budgetCtrl, UICtrl){

    let setupEventListeners = function(){

        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
             if(event.keyCode === 13 || event.which === 13){
                 ctrlAddItem();
             }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    }

    let updateBudget = function(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        // 2. Return the budget
        let budget = budgetCtrl.getBudget();
        // 3. Display the budget on the UI 
        UICtrl.displayBudget(budget);
        //console.log(budget);
    };

    let updatePercentages = function(){
        // 1. Calculate percentages
            budgetCtrl.calculatePercentages();
        // 2. Read percentages from the budget controller
        let percentage = budgetCtrl.getPercentages();
        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentage);
    };

    let ctrlAddItem = function(){
            let input, newitem;
        // 1. Get the filed input data
            input =  UICtrl.getInput();

            if(input.description !== "" && !isNaN(input.value) && input.value > 0){

                // 2. Add the item to the budget controller
                    newitem = budgetCtrl.addItem(input.type, input.description, input.value);
                // 3. Add the item to the UI
                    UICtrl.addListItem(newitem, input.type);
                // 4. clear the Fields 
                    UICtrl.clearFields();
        
                // 5.Calculate and update budget
                updateBudget();

                // 6. Update and show the new budget
                updatePercentages();
            }
    };
    let ctrlDeleteItem = function(event){
        let itemId, splitID, type, ID;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemId){
            splitID = itemId.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            //console.log(id);
            // 2. Delete the item from the UI
            UICtrl.deleteItem(itemId);
            // 3. Update and show the new budget
            updateBudget();

            // 4. Update and show the new budget
            updatePercentages();
        }
    }

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    };



})(budgetController, UIController);

controller.init();