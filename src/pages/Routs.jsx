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
// التجزئة
// التدقيق
// لوحة التحكم
const Routs = () => {
  return (
    <Container className="secbgColor">
      <Routes>
        {/* الاضافات */}
        <Route path="/البلد" element={<البلد />} />
        <Route path="/المدينة" element={<المدينة />} />
        <Route path="/سوق" element={<سوق />} />
        <Route path="/جنسيه" element={<جنسيه />} />
        <Route path="/المورد" element={<المورد />} />
        <Route path="/موظفين" element={<موظفين />} />
        <Route path="/بنك" element={<بنك />} />
        <Route path="/الوان_الذهب" element={<الوان_الذهب />} />
        <Route path="/اصناف_الذهب" element={<اصناف_الذهب />} />
        <Route path="/قطع_الاحجار" element={<قطع_الاحجار />} />
        <Route path="/الوان_الاحجار" element={<الوان_الاحجار />} />
        <Route path="/اسماء_الاحجار" element={<اسماء_الاحجار />} />
        {/* الادارة */}
        {/* الفروع */}
        {/* الموردين */}
        <Route path="/بداية_المدة" element={<بداية_المدة />} />
        <Route path="/توريد" element={<توريد />} />
        <Route path="/زيادات_رأسمالية" element={<زيادات_رأسمالية />} />
        <Route path="/سداد" element={<سداد />} />
        <Route path="/مردود_توريد" element={<مردود_توريد />} />
        <Route path="/خصم" element={<خصم />} />
        <Route path="/صور" element={<صور />} />
        {/* التجزئة */}
        {/* التدقيق */}
        {/* لوحة التحكم  */}
      </Routes>
    </Container>
  );
};

export default Routs;
