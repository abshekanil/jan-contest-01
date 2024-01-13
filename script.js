

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developers = arr.filter(employee => employee.profession === 'developer').map(({ name , age , profession}) => ({name, age, profession}));
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let ans = [];
    let devPrint = arr.forEach(employee => {
        if(employee.profession === 'developer')
        {
            ans.push({name:employee.name, age:employee.age, profession:employee.profession});
        }
    });
    console.log(ans);
  }
  
  function addData() {
    //Write your code here, just console.log
    let newData = {id:4, name: "susan", age: "20", profession: "intern"};
    arr = [...arr, newData];
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let removeAdminBtn = arr.filter(employee => employee.profession !== 'admin');
    console.log(removeAdminBtn);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 1, name: "Johnny", age: "23", profession: "Biker" },
        { id: 2, name: "Bruce", age: "21", profession: "Bussinessman" },
        { id: 3, name: "T'Challa", age: "30", profession: "King" },
    ];

    let concatenate = arr.concat(newArr);
    console.log(concatenate);
  }