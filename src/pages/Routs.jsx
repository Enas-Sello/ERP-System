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
// الفروع
// الموردين
import بداية_المدة from './الموردين/بداية_المدة';
import توريد from './الموردين/توريد';
import زيادات_رأسمالية from './الموردين/زيادات_رأسمالية';
import سداد from './الموردين/سداد';
import مردود_توريد from './الموردين/مردود_توريد';
import خصم from './الموردين/خصم';
import صور from './الموردين/صور';
import اضافه_سند_توريد from './الموردين/اضافه_سند_توريد';
// التجزئة
// التدقيق
// لوحة التحكم
const Routs = () => {
  return (
    <Container className="secbgColor">
      <Routes>
        {/* الاضافات */}
        <Route path="/بلد المنتج" element={<البلد />} />
        <Route path="/مدينة" element={<المدينة />} />
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
        <Route path="/اضافه سند توريد" element={<اضافه_سند_توريد />} />
        {/* التجزئة */}
        {/* التدقيق */}
        {/* لوحة التحكم  */}
      </Routes>
    </Container>
  );
};

export default Routs;
