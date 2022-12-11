/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// الاضافات
import البلد from './الاضافات/البلد';
import المدينة from './الاضافات/المدينة';
import سوق from './الاضافات/سوق';
import جنسيه from './الاضافات/جنسيه';
import المورد from './الاضافات/المورد';
import موظفين from './الاضافات/موظفين';
import بنك from './الاضافات/بنك';
import الوان_الذهب from './الاضافات/الوان_الذهب';
import اصناف_الذهب from './الاضافات/اصناف_الذهب';
import قطع_الاحجار from './الاضافات/قطع_الاحجار';
import الوان_الاحجار from './الاضافات/الوان_الاحجار';
import اسماء_الاحجار from './الاضافات/اسماء_الاحجار';
// الادارة
import Contractes from './السندات/Contractes';
// الفروع
// الموردين
import بداية_المدة from './الموردين/بداية_المدة';
import توريد from './الموردين/توريد';
import زيادات_رأسمالية from './الموردين/زيادات_رأسمالية';
import سداد from './الموردين/سداد';
import مردود_توريد from './الموردين/مردود_توريد';
import خصم from './الموردين/خصم';
import صور from './الموردين/صور';
// add

import Add_سند_توريد from '../components/Add_سند_توريد';
import Addسداد from '../components/Addسداد';
import Addمده from '../components/Addمده';
import Addمردود_توريد from '../components/Addمردود_توريد';
// edit
import Editتوريد from '../components/Editتوريد';
import Editمردود_توريد from '../components/Editمردود_توريد';
import Editالمده from '../components/Editالمده';
import Editسداد from '../components/Editسداد';
import Editخصم from '../components/Editخصم';
import AddContract from '../components/AddContract';
// التجزئة
// التدقيق
// لوحة التحكم
const Routs = () => {
  return (
    <Container className="bglightGray ">
      <Routes>
        {/* الاضافات */}
        <Route path="/Add_Contract" element={<AddContract />} />
        <Route path="/Contract" element={<Contractes />} />
        <Route path="/مدينة " element={<المدينة />} />
        <Route path="/بلد المنتج" element={<البلد />} />
        <Route path="/سوق" element={<سوق />} />
        <Route path="/جنسيه" element={<جنسيه />} />
        <Route path="/المورد" element={<المورد />} />
        <Route path="/موظفين" element={<موظفين />} />
        <Route path="/بنك" element={<بنك />} />
        <Route path="/الوان الذهب" element={<الوان_الذهب />} />
        <Route path="/اصناف الذهب" element={<اصناف_الذهب />} />
        <Route path="/قطع الاحجار" element={<قطع_الاحجار />} />
        <Route path="/الوان الاحجار" element={<الوان_الاحجار />} />
        <Route path="/اسماء الاحجار" element={<اسماء_الاحجار />} />
        {/* الادارة */}
        {/* الفروع */}
        {/* الموردين */}
        <Route path="/بداية المدة" element={<بداية_المدة />} />
        <Route path="/توريد" element={<توريد />} />
        <Route path="/زيادات رأسمالية" element={<زيادات_رأسمالية />} />
        <Route path="/سداد" element={<سداد />} />
        <Route path="/مردود توريد" element={<مردود_توريد />} />
        <Route path="/خصم" element={<خصم />} />
        <Route path="/صور" element={<صور />} />
        {/* التجزئة */}
        {/* التدقيق */}
        {/* لوحة التحكم  */}

        {/* componants */}
        {/* add */}
        <Route path="/Addسداد" element={<Addسداد />} />
        <Route path="/Editتوريد" element={<Editتوريد />} />
        <Route path="/Add_سند_توريد" element={<Add_سند_توريد />} />
        <Route path="/Editمردود_توريد" element={<Editمردود_توريد />} />
        <Route path="/Addمده" element={<Addمده />} />
        <Route path="/Addمردود_توريد" element={<Addمردود_توريد />} />
        {/* edit */}
        <Route path="/Editسداد" element={<Editسداد />} />
        <Route path="/Editالمده" element={<Editالمده />} />
        <Route path="/Editخصم" element={<Editخصم />} />
      </Routes>
    </Container>
  );
};

export default Routs;
