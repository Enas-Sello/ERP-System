import holder from './assets/holder.png';
import { BiHomeAlt } from 'react-icons/bi';
import { BsFiles } from 'react-icons/bs';
import { TfiBag } from 'react-icons/tfi';
import { AiOutlineCloudUpload, AiOutlineControl } from 'react-icons/ai';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { BsPeople } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
export const sidebar = [
  {
    id: '1',
    title: 'الرئيسيه',
    icon: BiHomeAlt,
    submenu: [
      { id: '1', title: 'بلد المنتج', Link: '' },
      { id: '2', title: 'مدينة', Link: '' },
      { id: '3', title: 'سوق', Link: '' },
      { id: '33', title: 'جنسيه', Link: '' },
      { id: '4', title: 'المورد', Link: '' },
      { id: '5', title: 'موظفين', Link: '' },
      { id: '6', title: 'بنك', Link: '' },
      { id: '7', title: 'اسماء الاحجار', Link: '' },
      { id: '8', title: 'الوان الاحجار', Link: '' },
      { id: '9', title: 'قطع الاحجار', Link: '' },
      { id: '10', title: 'الوان الذهب', Link: '' },
      { id: '11', title: 'اصناف الذهب', Link: '' },
    ],
  },
  {
    id: '23',
    title: 'السندات',
    icon: BsFiles,
    submenu: [
      {
        id: '44',
        title: 'السندات',
        Link: '/Contract',
      },
    ],
  },
  {
    id: '32',
    title: 'العملاء',
    icon: TfiBag,

    submenu: [{ id: '55', title: 'الفروع', Link: '' }],
  },
  {
    id: '4',
    title: 'الاضافات',
    icon: AiOutlineCloudUpload,
    Link: '',
    submenu: [
      { id: '1', title: 'بداية المدة', Link: '' },
      { id: '2', title: 'توريد', Link: '' },
      { id: '3', title: 'زيادات رأسمالية', Link: '' },
      { id: '4', title: 'سداد', Link: '' },
      { id: '5', title: 'مردود توريد', Link: '' },
      { id: '6', title: 'خصم', Link: '' },
      { id: '7', title: 'صور', Link: '' },
    ],
  },
  {
    id: '5',
    title: 'الاداره',
    icon: MdOutlineSettingsSuggest,
    Link: '',
    submenu: [{ id: '66', title: 'التجزئة', Link: '' }],
  },
  {
    id: '6',
    title: 'الفروع',
    icon: GiHomeGarage,
    Link: '',
    submenu: [{ id: '595', title: 'التدقيق', Link: '' }],
  },
  {
    id: '7',
    title: 'الموردين ',
    icon: BsPeople,
    Link: '',
    submenu: [{ id: '55', title: 'لوحة التحكم', Link: '' }],
  },
  {
    id: '7',
    title: 'التدقيق ',
    icon: BiSearch,
    Link: '',
    submenu: [{ id: '55', title: 'لوحة التحكم', Link: '' }],
  },
  {
    id: '7',
    title: 'عملاء النتجزئه ',
    icon: TfiBag,
    Link: '',
    submenu: [{ id: '55', title: 'لوحة التحكم', Link: '' }],
  },
  {
    id: '7',
    title: 'لوحه التحكم ',
    icon: AiOutlineControl,
    Link: '',
    submenu: [{ id: '55', title: 'لوحة التحكم', Link: '' }],
  },
];

export const Suplierheader = [
  { id: '1', header: 'الكود' },
  { id: '2', header: 'المورد' },
  { id: '3', header: 'المندوب' },
  { id: '4', header: 'الهاتف' },
  { id: '5', header: 'الحالة' },
  { id: '6', header: 'فعاليات' },
];

export const SuplierRows = [
  {
    id: '7',
    td1: 'start',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },

  {
    id: '20',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },

  {
    id: '60',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },

  {
    id: '50',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },

  {
    id: '80',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },

  {
    id: '90',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },
  {
    id: '90',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },
  {
    id: '90',
    td1: '215461654',
    td2: '215461654',
    td3: '215461654',
    td4: '215461654',
    td5: '215461654',
  },
];
export const images = [
  { id: '80vsa8', img: `${holder}` },
  { id: '8g08', img: `${holder}` },
  { id: '8a08', img: `${holder}` },
  { id: '8f08', img: `${holder}` },
  { id: 'dd', img: `${holder}` },
  { id: '8v08', img: `${holder}` },
  { id: '8vv08', img: `${holder}` },
  { id: '86007', img: `${holder}` },
  { id: '707', img: `${holder}` },
];
