/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import الايضافات from './الايضافات';
import الادارة from './الادارة';
import الفروع from './الفروع';
import الموردين from './الموردين';
import عملاء_التجزئة from './عملاء_التجزئة';
import التدقيق from './التدقيق';
import لوحة_التحكم from './لوحة_التحكم';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/الايضافات" element={<الايضافات />} />
        <Route path="/الادارة" element={<الادارة />} />
        <Route path="/الفروع" element={<الفروع />} />
        <Route path="/الموردين" element={<الموردين />} />
        <Route path="/عملاء_التجزئة" element={<عملاء_التجزئة />} />
        <Route path="/التدقيق" element={<التدقيق />} />
        <Route path="/لوحة_التحكم" element={<لوحة_التحكم />} />
      </Routes>
    </Container>
  );
};

export default Main;
