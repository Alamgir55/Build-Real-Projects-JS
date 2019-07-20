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
        }
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
        testing: function(){
            console.log(data);
        } 
    };



})();

let UIController = (function(){
    //
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function(){

            return {
                 type: document.querySelector(DOMstrings.inputType).value,
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        addListItem: function(obj, type){
            // Create HTML string with placeholder text
            let html, newHtml, element;
            
            // if(type === 'inc'){
            //     htlm = `<div class="item clearfix" id="income-${obj.id}">
            //     <div class="item__description">${obj.description}</div>
            //     <div class="right clearfix">
            //         <div class="item__value">${obj.value}</div>
            //         <div class="item__delete">
            //             <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            //         </div>
            //     </div>
            // </div>`;
            // }else if(type === 'exp'){
            //     html = `<div class="item clearfix" id="expense-${obj.id}">
            //     <div class="item__description">${obj.description}</div>
            //     <div class="right clearfix">
            //         <div class="item__value">${obj.value}</div>
            //         <div class="item__percentage">21%</div>
            //         <div class="item__delete">
            //             <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            //             </div>
            //         </div>
            //     </div>`;
            // }
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;

                html = `<div class="item clearfix" id="income-%id%">
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

                html = `<div class="item clearfix" id="expense-%id%">
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

        getDOMstrings: function(){
            return DOMstrings;
        }

    };
    


})();


let controller = (function(budgetCtrl, UICtrl){

    let setupEventListeners = function(){

        let DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
             if(event.keyCode === 13 || event.which === 13){
                 ctrlAddItem();
             }
        });
    }

    

    let ctrlAddItem = function(){
            let input, newitem;
        // 1. Get the filed input data
            input =  UICtrl.getInput();
           
        // 2. Add the item to the budget controller
            newitem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
            UICtrl.addListItem(newitem, input.type);
        // 4. clear the Fields 
            UICtrl.clearFields();
        // 4. Calculate the budget

        // 5. Display the budget on the UI        
    };

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };



})(budgetController, UIController);

controller.init();