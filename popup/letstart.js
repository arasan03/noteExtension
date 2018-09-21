
const notePad = document.getElementById('tslNotes');
const layOver = document.getElementById('layOver');
const cleanPad = document.getElementById('cleanPad');
const no = document.getElementById('no');
const yes = document.getElementById('yes');

const gettingItem = browser.storage.local.get('tslStickyNotes');

gettingItem.then((res) => {
try{
  if(res.tslStickyNotes){
    notePad.value = res.tslStickyNotes;
  }
}catch(e){}
});

cleanPad.addEventListener('click',()=>{
    layOver.className="";
}, false);

notePad.addEventListener('keyup',()=>{
    browser.storage.local.set({ tslStickyNotes: notePad.value });
}, false);

no.addEventListener('click',()=>{
    layOver.className="hidden";
}, false);

yes.addEventListener('click',()=>{
    notePad.value = "";
    browser.storage.local.set({ tslStickyNotes: "" });
    layOver.className="hidden";
}, false);




    var d= new Date();
    var day=d.getDay();
          switch(day){
    case 1:
				day="Monday";
        document.write("Monday");
        break;
    case 2:
				day="Tuesday";
        document.write("Tuesday");
        break;
    case 3:
				day="wed";
        document.write("Wednesday");
        break;
    case 4:
				day="Thursday";
        document.write("Thursday");
        break;
        case 5:
				day="Friday";
        document.write ("Friday")
        break;
        case 6:
				day="Saturday";
        document.write ("Saturday")
        break;
        case 7:
				day="Sunday";
        document.write ("Sunday")
        break;
}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0' + dd
}

if(mm<10) {
    mm = '0' +mm
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
