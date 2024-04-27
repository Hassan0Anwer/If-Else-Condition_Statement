var percent = prompt("enter your percentage");

if(percent >= 100){
    alert('Please write valid Percentage');
}

else if (percent >= 80 && percent < 100){

    alert('! Congratulations For A1 GRADE !')
}

else if (percent >= 70 && percent < 80){

    alert('! Congratulations For A GRADE !')
}

else if (percent >= 60 && percent < 70){

    alert('! Congratulations For B  GRADE !')
}
else if (percent >= 50 && percent < 60){

    alert('! Congratulations For C GRADE !')
}
else if (percent >= 40 && percent < 50){

    alert('! Congratulations For D GRADE !')
}

else{

    alert("You are Fail !" )
}