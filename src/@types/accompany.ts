import { UserSimpleResponse } from '@/@types/auth';

type AccompanyAge =
  | 'MIN'
  | 'TWENTY'
  | 'TWENTY_FIVE'
  | 'THIRTY'
  | 'THIRTY_FIVE'
  | 'FORTY'
  | 'FORTY_FIVE'
  | 'OVER_FIFTY'
  | 'MAX';

type AccompanyGender = 'MALE' | 'FEMALE' | 'NO_PREFERENCE';

type AccompanyCountry =
  | 'KOREA'
  | 'JAPAN'
  | 'HONG_KONG'
  | 'MACAO'
  | 'TAIWAN'
  | 'CHINA'
  | 'MONGOLIA'
  | 'SINGAPORE'
  | 'EAST_TIMOR'
  | 'MYANMAR'
  | 'CAMBODIA'
  | 'LAOS'
  | 'PHILIPPINES'
  | 'MALAYSIA'
  | 'INDONESIA'
  | 'THAILAND'
  | 'VIETNAM'
  | 'BRUNEI'
  | 'UZBEKISTAN'
  | 'BANGLADESH'
  | 'AZERBAIJAN'
  | 'BUTANE'
  | 'AFGHANISTAN'
  | 'TAJIKISTAN'
  | 'KYRGYZSTAN'
  | 'KAZAKHSTAN'
  | 'TURKMENISTAN'
  | 'TIBET'
  | 'ARAB_EMIRATES'
  | 'JORDAN'
  | 'YEMEN'
  | 'SYRIA'
  | 'IRAN'
  | 'PAKISTAN'
  | 'CYPRUS'
  | 'SRI_LANKA'
  | 'MALDIVE'
  | 'BAHRAIN'
  | 'LRAQ'
  | 'PALESTINE'
  | 'OMAN'
  | 'INDIA'
  | 'NEPAL'
  | 'ISRAEL'
  | 'CATARRH'
  | 'LEBANON'
  | 'SAUDI_ARABIA'
  | 'KUWAIT'
  | 'ARMENIA'
  | 'GEORGIA'
  | 'MALTA'
  | 'MOLDOVA'
  | 'MONTENEGRO'
  | 'MONACO'
  | 'MACEDONIA'
  | 'LIECHTENSTEIN'
  | 'LITHUANIA'
  | 'LUXEMBOURG'
  | 'ROMANIA'
  | 'VATICAN'
  | 'BELARUS'
  | 'BOSNIA_HERCEGOVINA'
  | 'CROATIA'
  | 'UKRAINE'
  | 'ESTONIA'
  | 'ALBANIA'
  | 'ANDORRA'
  | 'SLOVAKIA'
  | 'SERBIA'
  | 'SAN_MARINO'
  | 'BULGARIA'
  | 'LATVIA'
  | 'SLOVENIA'
  | 'PORTUGAL'
  | 'SWISS'
  | 'GERMANY'
  | 'NETHERLAND'
  | 'AUSTRIA'
  | 'ENGLAND'
  | 'SPAIN'
  | 'TURKIYE'
  | 'ITALY'
  | 'POLAND'
  | 'ICELAND'
  | 'FINLAND'
  | 'CZECHIA'
  | 'BELGIUM'
  | 'HUNGARY'
  | 'IRELAND'
  | 'RUSSIA'
  | 'GREECE'
  | 'DENMARK'
  | 'NORWAY'
  | 'SWEDEN'
  | 'FRANCE'
  | 'AUSTRALIA'
  | 'PALAU'
  | 'PAPUA_NEW_GUINEA'
  | 'TONGA'
  | 'KIRIBATI'
  | 'SOLOMON_ISLAND'
  | 'SAMOA'
  | 'TUNISIA'
  | 'ANGOLA'
  | 'ALGERIA'
  | 'SIERRA_LEONE'
  | 'SUDAN'
  | 'SOMALIA'
  | 'SEYCHELLES'
  | 'SENEGAL'
  | 'UGANDA'
  | 'ZAMBIA'
  | 'EQUATORIAL_GUINEA'
  | 'TOGO'
  | 'CONGO'
  | 'COTE_D_IVOIRE'
  | 'COMOROS'
  | 'ZIMBABWE'
  | 'DJIBOUTI'
  | 'CENTRAL_AFRICAN_REPUBLIC'
  | 'BURUNDI'
  | 'BURKINA_FASO'
  | 'GUINEA_BISSAU'
  | 'BOTSWANA'
  | 'GUINEA'
  | 'GAMBIA'
  | 'GABON'
  | 'GHANA'
  | 'MOROCCO'
  | 'NAMIBIA'
  | 'KENYA'
  | 'ETHIOPIA'
  | 'TANZANIA'
  | 'NIGERIA'
  | 'BENIN'
  | 'NIGER'
  | 'MOZAMBIQUE'
  | 'MAURITANIA'
  | 'MAURITIUS'
  | 'MALI'
  | 'MALAWI'
  | 'MADAGASCAR'
  | 'LIBYA'
  | 'RWANDA'
  | 'LESOTHO'
  | 'LIBERIA'
  | 'EGYPT'
  | 'UNITED_STATES'
  | 'CANADA'
  | 'MEXICO'
  | 'ANTIGUA_AND_BARBUDA'
  | 'ARUBA'
  | 'ANGUILLA'
  | 'ANTARCTICA'
  | 'BAHAMAS'
  | 'BELIZE'
  | 'BARBADOS'
  | 'BERMUDA'
  | 'BOLIVIA'
  | 'BRAZIL'
  | 'IRAQ'
  | 'QATAR'
  | 'ARGENTINA'
  | 'CHILE'
  | 'COLOMBIA'
  | 'ECUADOR'
  | 'PARAGUAY'
  | 'PERU'
  | 'SURINAME'
  | 'URUGUAY'
  | 'VENEZUELA';

type AccompanyContinent =
  | 'EAST_ASIA'
  | 'SOUTHEAST_ASIA'
  | 'CENTRAL_ASIA'
  | 'WESTERN_ASIA'
  | 'EUROPE'
  | 'OCEANIA'
  | 'AFRICA'
  | 'NORTH_AMERICA'
  | 'SOUTH_AMERICA';

type AccompanyCity =
  | 'SEOUL'
  | 'BUSAN'
  | 'INCHEON'
  | 'DAEGU'
  | 'GWANGJU'
  | 'DAEJEON'
  | 'ULSAN'
  | 'SUWON'
  | 'CHANGWON'
  | 'JEJU'
  | 'TOKYO'
  | 'OSAKA'
  | 'KYOTO'
  | 'SAPPORO'
  | 'FUKUOKA'
  | 'HIROSHIMA'
  | 'NAGOYA'
  | 'OKINAWA'
  | 'KANAZAWA'
  | 'BEIJING'
  | 'SHANGHAI'
  | 'HONG_KONG'
  | 'MACAO'
  | 'GUANGZHOU'
  | 'SHENZHEN'
  | 'CHENGDU'
  | 'XIAMEN'
  | 'TIANJIN'
  | 'NEW_YORK'
  | 'LOS_ANGELES'
  | 'CHICAGO'
  | 'LAS_VEGAS'
  | 'SAN_FRANCISCO'
  | 'WASHINGTON_DC'
  | 'MIAMI'
  | 'ORLANDO'
  | 'SEATTLE'
  | 'LONDON'
  | 'EDINBURGH'
  | 'MANCHESTER'
  | 'BIRMINGHAM'
  | 'GLASGOW'
  | 'LIVERPOOL'
  | 'CAMBRIDGE'
  | 'PARIS'
  | 'MARSEILLE'
  | 'LYON'
  | 'NICE'
  | 'BORDEAUX'
  | 'STRASBOURG'
  | 'BERLIN'
  | 'MUNICH'
  | 'FRANKFURT'
  | 'HAMBURG'
  | 'COLOGNE'
  | 'DUSSELDORF'
  | 'ROME'
  | 'MILAN'
  | 'VENICE'
  | 'FLORENCE'
  | 'NAPLES'
  | 'TURIN'
  | 'MADRID'
  | 'BARCELONA'
  | 'VALENCIA'
  | 'SEVILLE'
  | 'MALAGA'
  | 'BILBAO'
  | 'TORONTO'
  | 'VANCOUVER'
  | 'MONTREAL'
  | 'CALGARY'
  | 'OTTAWA'
  | 'QUEBEC_CITY'
  | 'SYDNEY'
  | 'MELBOURNE'
  | 'BRISBANE'
  | 'PERTH'
  | 'ADELAIDE'
  | 'CANBERRA'
  | 'SAO_PAULO'
  | 'RIO_DE_JANEIRO'
  | 'BRASILIA'
  | 'SALVADOR'
  | 'BELO_HORIZONTE'
  | 'MUMBAI'
  | 'NEW_DELHI'
  | 'BANGALORE'
  | 'CHENNAI'
  | 'KOLKATA'
  | 'HYDERABAD'
  | 'MOSCOW'
  | 'SAINT_PETERSBURG'
  | 'NOVOSIBIRSK'
  | 'EKATERINBURG'
  | 'KAZAN'
  | 'NIZHNY_NOVGOROD'
  | 'ISTANBUL'
  | 'ANKARA'
  | 'IZMIR'
  | 'BURSA'
  | 'ANTALYA'
  | 'ADANA'
  | 'BUENOS_AIRES'
  | 'CORDOBA'
  | 'ROSARIO'
  | 'MENDOZA'
  | 'SALTA'
  | 'CAIRO'
  | 'ALEXANDRIA'
  | 'LUXOR'
  | 'SHARM_EL_SHEIKH'
  | 'ASWAN'
  | 'HURGHADA'
  | 'BANGKOK'
  | 'PHUKET'
  | 'CHIANG_MAI'
  | 'PATTAYA'
  | 'KRABI'
  | 'HUA_HIN'
  | 'MEXICO_CITY'
  | 'CANCUN'
  | 'GUADALAJARA'
  | 'MONTERREY'
  | 'TULUM'
  | 'OAXACA'
  | 'JAKARTA'
  | 'BALI'
  | 'BANDUNG'
  | 'YOGYAKARTA'
  | 'SURABAYA'
  | 'MAKASSAR';

type AccompanyReplyStatus = 'ACTIVE' | 'DELETED';

/* 동행 게시글 생성 req body */
export interface CreateAccompanyRequest {
  title: string;
  content: string;
  continent: string;
  country: string;
  city: string;
  startTripDate: string;
  endTripDate: string;
  memberCount: number;
  tags: string[];
  openKakaoUrl: string;
  startAccompanyAge: number;
  endAccompanyAge: number;
  preferGender: string;
  hasImage: boolean;
}

/* 동행 목적지 */
export interface AccompanyDestination {
  continent: AccompanyContinent;
  country: AccompanyCountry;
  city: AccompanyCity;
}

/* 동행 게시글 생성 res */
export interface AccompanyResponse {
  id: number;
  userId: number;
  title: string;
  content: string;
  destination: AccompanyDestination;
  startTripDate: string;
  endTripDate: string;
  bannerImageUrl?: string;
  memberCount: number;
  viewCount: number;
  likeCount: number;
  tagIds?: number[];
  openKakaoUrl: string;
  startAccompanyAge: number;
  endAccompanyAge: number;
  preferGender: AccompanyGender;
}

export interface FindAccompanyUserInfo {
  nickname: string;
  profileImageUrl?: string;
  isMale: boolean;
  bio?: string;
  joinDate: string;
}

/* 동행 게시글 단건 조회 res */
export interface FindAccompanyResponse {
  id: number;
  userId: number;
  title: string;
  content: string;
  destination: AccompanyDestination;
  startTripDate: string;
  endTripDate: string;
  bannerImageUrl?: string;
  memberCount: number;
  viewCount: number;
  openKakaoUrl: string;
  startAccompanyAge: number;
  endAccompanyAge: number;
  preferGender: AccompanyGender;
  tagIds?: number[];
  likeCount: number;
  author: FindAccompanyUserInfo;
  approvalPendingUsers: FindAccompanyUserInfo[];
}

/* 동행 게시글 수정 req body */
export interface UpdateAccompanyRequest {
  content?: string;
  tagIds?: number[];
}

/* 동행 댓글 생성 req body */
export interface CreateAccompanyReplyRequest {
  content: string;
}

/* 동행 댓글 수정 req body */
export interface UpdateAccompanyReplyRequest {
  content?: string;
}

/* 동행 댓글 수정 res */
export interface AccompanyReplyResponse {
  id: number;
  author: UserSimpleResponse;
  accompanyId: number;
  parentId?: number;
  content?: string;
  likeCount: number;
  createdAt?: string;
  status: AccompanyReplyStatus;
}

export type {
  AccompanyAge,
  AccompanyGender,
  AccompanyContinent,
  AccompanyCountry,
  AccompanyCity,
  AccompanyReplyStatus,
};
