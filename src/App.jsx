import React from "react";
import City from "./city";
function App() {
  return (
    <div className="container">
      <div className="head">
        <p>التاريخ والتوقيت</p>
      </div>
      <City zone="Africa/Cairo" city="القاهرة" country="مصر" />
      <City zone="Africa/Casablanca" city="كازابلانكا" country="المغرب" />
      <City zone="Asia/Dubai" city="دبي" country="الامارات" />
      <City zone="Asia/Riyadh" city="الرياض" country="السعودية" />
      <City zone="Asia/Tokyo" city="طوكيو" country="اليابان" />
      <City zone="Asia/Seoul" city="سيول" country="كوريا الجنوبية" />
      <City zone="Asia/Shanghai" city="شانجهاي" country="الصين" />
      <City zone="America/Sao_Paulo" city="ساو باولو" country="البرازيل" />
      <City zone="Europe/Madrid" city="مدريد" country="اسبانيا" />
      <City zone="Europe/London" city="لندن" country="انجلترا" />
      <City zone="Australia/Sydney" city="سيدني" country="استراليا" />
      <City zone="America/Toronto" city="تورنتو" country="كندا" />
    </div>
  );
}

export default App;
