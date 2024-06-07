function  Calcul(IdJob, IdItem, IdQuantite){
    let Quantite = document.querySelector(`.${IdQuantite}`).value;
    let ResultFp =  ((Quantite*2)/Jobs[IdJob][0][IdItem])*Speed1*Speed2*SpeedBeac1*SpeedBeac2*
    Haste1*Haste2*Force1*Force2*FlySpeed1*FlySpeed2*FlySpeed3;
    let ResultXp =  ((Quantite*2)/Jobs[IdJob][1][IdItem])*Speed1*Speed2*SpeedBeac1*SpeedBeac2*
    Haste1*Haste2*Force1*Force2*FlySpeed1*FlySpeed2*FlySpeed3;
    let ResultXpJobs =  ((Quantite*2)/Jobs[IdJob][2][IdItem])*Speed1*Speed2*SpeedBeac1*SpeedBeac2*
    Haste1*Haste2*Force1*Force2*FlySpeed1*FlySpeed2*FlySpeed3;
    let ResultArgent =  ((Quantite*2)/Jobs[IdJob][3][IdItem])*Speed1*Speed2*SpeedBeac1*SpeedBeac2*
    Haste1*Haste2*Force1*Force2*FlySpeed1*FlySpeed2*FlySpeed3;
    let ResultItems =  ((Quantite*2)/Jobs[IdJob][4][IdItem])*Speed1*Speed2*SpeedBeac1*SpeedBeac2*
    Haste1*Haste2*Force1*Force2*FlySpeed1*FlySpeed2*FlySpeed3;
}