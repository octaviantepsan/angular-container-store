//MutationObserver

const observer = new MutationObserver(function (mutations) {
  console.log(mutations);
});

observer.observe(document.getElementById("patrat"), { attributes: true, attributeFilter: ["style"] });

//callback <=> functie


// <div *ngFor="let item of array" [style.float]="item.float"></div>
// array[] = "0, 1, 0, 1"
// if(array[i] = 0)
// anunt.float = right