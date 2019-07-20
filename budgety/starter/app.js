let budgetController = (function(){
    
    let Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
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
        container: '.container' 
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
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;

            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentagelabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentagelabel).textContent = '----';
            }
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

            // 3. Update and show the new budget
        }
    }

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
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