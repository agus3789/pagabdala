function check()
{
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;
    var q11 = document.quiz.q11.value;
    var q12 = document.quiz.q12.value;
    var q13 = document.quiz.q13.value;
    var q14 = document.quiz.q14.value;
    var q15 = document.quiz.q15.value;
    var q16 = document.quiz.q16.value;
    var q17 = document.quiz.q17.value;
    var porcentaje;
    var cont=0;
    var resultado="";

    
    if(q1 == "Dengue")
    {
       cont++;
    }
    if(q2 == "NO")
    {
       cont++;
    }
    if(q3 == "SI")
    {
       cont++;
    }
    if(q4 == "NO")
    {
       cont++;
    }
    if(q5 == "NO")
    {
       cont++;
    }
    if(q6 == "NO")
    {
       cont++;
    }
    if(q7 == "NO")
    {
       cont++;
    }
    if(q8 == "NO")
    {
       cont++;
    }
    if(q9 == "SI")
    {
       cont++;
    }
    if(q10 == "NO")
    {
       cont++;
    }
    if(q11 == "SI")
    {
       cont++;
    }
    if(q12 == "No es muy efectiva")
    {
       cont++;
    }
    if(q13 == "SI")
    {
       cont++;
    }
    if(q14 == "NO")
    {
       cont++;
    }
    if(q15 == "A")
    {
       cont++;
    }
    if(q16 == "NO")
    {
       cont++;
    }
    if(q17 == "C")
    {
       cont++;
    }
    
    porcentaje = cont*100/17;
    porcentaje = parseInt(porcentaje);

   if(porcentaje>=1 && porcentaje<40)
   {
      return alert("debe ponerse a estudiar mas, sos un desastre " + porcentaje + "% de aciertos");
   }
   
   if(porcentaje>=41 && porcentaje<=69)
   {
      return alert("debe ponerse a estudiar mas " + porcentaje + "% de aciertos");
   }
   
   if(porcentaje>=70)
   {
      return alert("Muy buenas respuestas " + porcentaje + "% de aciertos");
   }
    

}
