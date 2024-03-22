const countries = [
    { value: 1, label: 'All countries' },
    { value: 2, label: 'USA' },
    { value: 3, label: 'Europe' },
    { value: 4, label: 'European Union/EFTA' },
    { value: 5, label: 'UK' },
    { value: 6, label: 'Hong Kong' },
    { value: 7, label: 'Albania' },
    { value: 8, label: 'Andorra' },
    { value: 9, label: 'Angola' },
    { value: 10, label: 'Anguilla' },
    { value: 11, label: 'Antigua and Barbuda' },
    { value: 12, label: 'Argentina' },
    { value: 13, label: 'Armenia' },
    { value: 14, label: 'Aruba' },
    { value: 15, label: 'Australia' },
    { value: 16, label: 'Austria' },
    { value: 17, label: 'Azerbaijan' },
    { value: 18, label: 'Bahrain' },
    { value: 19, label: 'Barbados' },
    { value: 20, label: 'Belgium' },
    { value: 21, label: 'Belize' },
    { value: 22, label: 'Benin' },
    { value: 23, label: 'Bermuda' },
    { value: 24, label: 'Bhutan' },
    { value: 25, label: 'Bolivia' },
    { value: 26, label: 'Bosnia-Herzegovina' },
    { value: 27, label: 'Botswana' },
    { value: 28, label: 'Brazil' },
    { value: 29, label: 'British Virgin Is.' },
    { value: 30, label: 'Bulgaria' },
    { value: 31, label: 'Cambodia' },
    { value: 32, label: 'Cameroon' },
    { value: 33, label: 'Canada' },
    { value: 34, label: 'Cape Verde' },
    { value: 35, label: 'Cayman Islands' },
    { value: 36, label: 'Chile' },
    { value: 37, label: 'China' },
    { value: 38, label: 'Colombia' },
    { value: 39, label: 'Costa Rica' },
    { value: 40, label: 'Croatia' },
    { value: 41, label: 'Curacao' },
    { value: 42, label: 'Cyprus' },
    { value: 43, label: 'Czech Republic' },
    { value: 44, label: 'Denmark' },
    { value: 45, label: 'Dominican Republic' },
    { value: 46, label: 'Ecuador' },
    { value: 47, label: 'Egypt' },
    { value: 48, label: 'El Salvador' },
    { value: 49, label: 'Estonia' },
    { value: 50, label: 'Ethiopia' },
    { value: 51, label: 'Fiji' },
    { value: 52, label: 'Finland' },
    { value: 53, label: 'France' },
    { value: 54, label: 'French Polynesia' },
    { value: 55, label: 'French West Indies' },
    { value: 56, label: 'Georgian Republic' },
    { value: 57, label: 'Germany' },
    { value: 58, label: 'Ghana' },
    { value: 59, label: 'Gibraltar' },
    { value: 60, label: 'Greece' },
    { value: 61, label: 'Grenada' },
    { value: 62, label: 'Guatemala' },
    { value: 63, label: 'Guernsey' },
    { value: 64, label: 'Guyana' },
    { value: 65, label: 'Honduras' },
    { value: 66, label: 'Hungary' },
    { value: 67, label: 'Iceland' },
    { value: 68, label: 'India' },
    { value: 69, label: 'Indonesia' },
    { value: 70, label: 'Iraq' },
    { value: 71, label: 'Ireland' },
    { value: 72, label: 'Israel' },
    { value: 73, label: 'Italy' },
    { value: 74, label: 'Ivory Coast' },
    { value: 75, label: 'Jamaica' },
    { value: 76, label: 'Japan' },
    { value: 77, label: 'Jersey' },
    { value: 78, label: 'Jordan' },
    { value: 79, label: 'Kazakhstan' },
    { value: 80, label: 'Kenya' },
    { value: 81, label: 'Kosovo' },
    { value: 82, label: 'Laos' },
    { value: 83, label: 'Latvia' },
    { value: 84, label: 'Lebanon' },
    { value: 85, label: 'Liechtenstein' },
    { value: 86, label: 'Lithuania' },
    { value: 87, label: 'Luxembourg' },
    { value: 88, label: 'Macao' },
    { value: 89, label: 'Malaysia' },
    { value: 90, label: 'Maldives' },
    { value: 91, label: 'Malta' },
    { value: 92, label: 'Mauritius' },
    { value: 93, label: 'Mexico' },
    { value: 94, label: 'Moldova' },
    { value: 95, label: 'Monaco' },
    { value: 96, label: 'Mongolia' },
    { value: 97, label: 'Montenegro' },
    { value: 98, label: 'Morocco' },
    { value: 99, label: 'Mozambique' },
    { value: 100, label: 'Namibia' },
    { value: 101, label: 'Nepal' },
    { value: 102, label: 'Netherlands' },
    { value: 103, label: 'New Caledonia' },
    { value: 104, label: 'New Zealand' },
    { value: 105, label: 'Nicaragua' },
    { value: 106, label: 'Nigeria' },
    { value: 107, label: 'North Macedonia' },
    { value: 108, label: 'Norway' },
    { value: 109, label: 'Oman' },
    { value: 110, label: 'Pakistan' },
    { value: 111, label: 'Panama' },
    { value: 112, label: 'Papua New Guinea' },
    { value: 113, label: 'Paraguay' },
    { value: 114, label: 'Peru' },
    { value: 115, label: 'Philippines' },
    { value: 116, label: 'Poland' },
    { value: 117, label: 'Portugal' },
    { value: 118, label: 'Puerto Rico' },
    { value: 119, label: 'Qatar' },
    { value: 120, label: 'Romania' },
    { value: 121, label: 'Russia' },
    { value: 122, label: 'Rwanda' },
    { value: 123, label: 'Saint Kitts and Nevis' },
    { value: 124, label: 'Saint Lucia' },
    { value: 125, label: 'Saint Martin (French part)' },
    { value: 126, label: 'Saint Vincent and the Grenadines' },
    { value: 127, label: 'San Marino' },
    { value: 128, label: 'Saudi Arabia' },
    { value: 129, label: 'Senegal' },
    { value: 130, label: 'Serbia' },
    { value: 131, label: 'Seychelles' },
    { value: 132, label: 'Sierra Leone' },
    { value: 133, label: 'Singapore' },
    { value: 134, label: 'Sint Maarten' },
    { value: 135, label: 'Slovakia' },
    { value: 136, label: 'Slovenia' },
    { value: 137, label: 'South Africa' },
    { value: 138, label: 'South Korea' },
    { value: 139, label: 'Spain' },
    { value: 140, label: 'Sri Lanka' },
    { value: 141, label: 'Suriname' },
    { value: 142, label: 'Sweden' },
    { value: 143, label: 'Switzerland' },
    { value: 144, label: 'Taiwan' },
    { value: 145, label: 'Tanzania' },
    { value: 146, label: 'Thailand' },
    { value: 147, label: 'Timor-Leste' },
    { value: 148, label: 'Togo' },
    { value: 149, label: 'Trinidad and Tobago' },
    { value: 150, label: 'Tunisia' },
    { value: 151, label: 'Turkey' },
    { value: 152, label: 'Turks and Caicos' },
    { value: 153, label: 'Uganda' },
    { value: 154, label: 'Ukraine' },
    { value: 155, label: 'UAE' },
    { value: 156, label: 'Uruguay' },
    { value: 157, label: 'Uzbekistan' },
    { value: 158, label: 'Vanuatu' },
    { value: 159, label: 'Vatican City' },
    { value: 160, label: 'Venezuela' },
    { value: 161, label: 'Vietnam' },
    { value: 162, label: 'Zambia' },
    { value: 163, label: 'Zimbabwe' }
];

export default countries;