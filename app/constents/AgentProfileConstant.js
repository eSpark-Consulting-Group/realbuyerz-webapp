import { SvgIcon } from "@mui/material";
import { Slider } from 'react-slick';

export const Properties = [
  {
    title: "46 Properties For Sale",
    view: "View All",
    PropertyNumber1: "34",
    PropertieName1: "Plots",
    PropertyNumber2: "7",
    PropertieName2: "Houses",
    PropertyNumber3: "5",
    PropertieName3: "Commercials",
  },
  {
    title: "46 Properties For Rent",
    view: "View All",
    PropertyNumber1: "34",
    PropertieName1: "Plots",
    PropertyNumber2: "7",
    PropertieName2: "Houses",
    PropertyNumber3: "5",
    PropertieName3: "Commercials",
  },
];

export const info = [
  {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborumAt vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atquecorrupti quos dolores et quas molestias excepturi sint occaecaticupiditate non provident, similique sunt in culpa qui officia deseruntmollitia animi, id est laborum et dolorum fuga. Et harum quidem rerumfacilis est et expedita distinctio. Nam libero tempore, cum soluta nobisest eligendi optio cumque nihil impedit quo minus id quod maxime placeatfacere possimus, omnis voluptas assumenda est, omnis dolor repellendus.Temporibus autem quibusdam et aut officiis debitis aut rerumnecessitatibus saepe eveniet ut et voluptates repudiandae sint etmolestiae non recusandae. Itaque earum rerum hic tenetur a sapientedelectus, ut aut reiciendis voluptatibus maiores alias consequatur autperferendis doloribus asperiores repellat",
  },
];

const salesIcon = (
  <SvgIcon
    width="22"
    height="22"
    viewBox="0 0 22 22"
    className="mr-2"
    sx={{
      color: "#FB631C",
      marginRight: 1.5,
      width: 19,
      height: 19,
    }}
  >
    <path
      d="M21.5438 10.8234L12.1673 0.900617L11.5388 0.235159C11.3956 0.0845357 11.2019 0 11 0C10.7982 0 10.6045 0.0845357 10.4613 0.235159L0.456308 10.8234C0.309572 10.9781 0.193604 11.1625 0.11525 11.3655C0.036895 11.5685 -0.0022583 11.786 0.000100583 12.0053C0.00980713 12.9097 0.720812 13.6317 1.57499 13.6317H2.60631V22H19.3938V13.6317H20.4469C20.8619 13.6317 21.2526 13.4595 21.5462 13.1486C21.6908 12.9961 21.8053 12.8146 21.8832 12.6148C21.9611 12.415 22.0008 12.2009 22 11.9847C22 11.5479 21.8374 11.1343 21.5438 10.8234ZM12.359 20.1501H9.64113V14.9086H12.359V20.1501ZM17.6466 11.7818V20.1501H13.912V14.292C13.912 13.7242 13.4776 13.2643 12.9414 13.2643H9.05873C8.52245 13.2643 8.08808 13.7242 8.08808 14.292V20.1501H4.35349V11.7818H2.02392L11.0025 2.28292L11.563 2.87644L19.9786 11.7818H17.6466Z"
      fill="#FB631C"
    />
  </SvgIcon>
);

const rentIcon = (
  <SvgIcon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className="mr-2"
    sx={{
      color: "#FB631C",
      marginRight: 1.5,
      width: 17,
      height: 17,
    }}
  >
    <path d="M10.1129 15.1759C10.1129 15.8459 10.3347 16.4154 10.7784 16.8844C11.222 17.3534 11.7607 17.5879 12.3945 17.5879C13.0283 17.5879 13.5670 17.3534 14.0107 16.8844C14.4543 16.4154 14.6762 15.8459 14.6762 15.1759C14.6762 14.8241 14.6009 14.4765 14.4504 14.1332C14.7752 14.2923 15.1040 14.3719 15.4367 14.3719C16.0705 14.3719 16.6092 14.1374 17.0529 13.6683C17.4965 13.1993 17.7184 12.6298 17.7184 11.9598C17.7184 11.2898 17.4965 10.7203 17.0529 10.2513C16.6092 9.78224 16.0705 9.54774 15.4367 9.54774C14.8029 9.54774 14.2642 9.78224 13.8206 10.2513C13.3769 10.7203 13.1551 11.2898 13.1551 11.9598C13.1551 12.3116 13.2303 12.6591 13.3809 13.0025C13.0561 12.8434 12.7273 12.7638 12.3945 12.7638C11.7607 12.7638 11.2220 12.9983 10.7784 13.4673C10.3347 13.9363 10.1129 14.5059 10.1129 15.1759ZM0 6.33166C0 6.18928 0.1941 5.9129 0.5823 5.50251C0.9705 5.09213 1.2319 4.88693 1.3666 4.88693C1.4379 4.88693 1.5508 4.95394 1.7053 5.08794C1.8598 5.22194 2.0044 5.36013 2.1390 5.50251C2.2737 5.64489 2.4262 5.8124 2.5966 6.00502C2.7669 6.19765 2.8639 6.30653 2.8877 6.33166L4.0285 5.12563L1.4141 2.36181C1.1923 2.1273 1.0814 1.84255 1.0814 1.50754C1.0814 1.15578 1.2359 0.816584 1.5449 0.48995C1.8538 0.163317 2.1747 0 2.5074 0C2.8243 0 3.0937 0.117252 3.3155 0.351759L11.2894 8.78141C12.6837 7.68425 14.1295 7.13568 15.6269 7.13568C16.9182 7.13568 17.9699 7.56491 18.7819 8.42337C19.5940 9.28183 20 10.3936 20 11.7588C20 13.0988 19.6237 14.4095 18.8711 15.6910C18.1184 16.9724 17.1361 18.0109 15.9239 18.8065C14.7118 19.6022 13.4720 20 12.2044 20C10.9131 20 9.8614 19.5708 9.0493 18.7123C8.2373 17.8539 7.8313 16.7420 7.8313 15.3769C7.8313 13.7940 8.3502 12.2655 9.3880 10.7915L5.1693 6.33166L4.0285 7.53769C4.0523 7.56281 4.1553 7.66541 4.3375 7.84548C4.5197 8.02554 4.6782 8.18677 4.8128 8.32915C4.9475 8.47152 5.0782 8.62437 5.2050 8.78769C5.3318 8.9510 5.3951 9.07035 5.3951 9.14573C5.3951 9.28811 5.2010 9.56449 4.8128 9.97487C4.4246 10.3853 4.1632 10.5905 4.0285 10.5905C3.9255 10.5905 3.8344 10.5486 3.7552 10.4648C3.7077 10.4146 3.5255 10.2282 3.2086 9.90578C2.8917 9.58333 2.5668 9.25042 2.2341 8.90703C1.9014 8.56365 1.5587 8.20352 1.2062 7.82663C0.8536 7.44975 0.5645 7.12312 0.3387 6.84673C0.1129 6.57035 0 6.39866 0 6.33166Z" />
  </SvgIcon>
);

const locationIcon = (
  <SvgIcon
    width="15"
    height="20"
    viewBox="0 0 19 24"
    className="mr-2"
    sx={{
      color: "#FB631C",
      marginRight: 1,
      width: 22,
      height: 22,
    }}
  >
    <path
      d="M9.4231 13.714C8.5761 13.714 7.74813 13.4627 7.04388 12.9917C6.33964 12.5208 5.79074 11.8515 5.46661 11.0684C5.14248 10.2853 5.05767 9.42354 5.22291 8.59219C5.38815 7.76085 5.79602 6.99721 6.39493 6.39784C6.99385 5.79847 7.75691 5.39029 8.58763 5.22493C9.41835 5.05956 10.2794 5.14444 11.0619 5.46881C11.8444 5.79319 12.5133 6.3425 12.9838 7.04728C13.4544 7.75206 13.7056 8.58066 13.7056 9.4283C13.7042 10.5645 13.2526 11.6538 12.4498 12.4573C11.6469 13.2607 10.5585 13.7126 9.4231 13.714ZM9.4231 6.85687C8.9149 6.85687 8.41812 7.00768 7.99557 7.29023C7.57302 7.57278 7.24368 7.97438 7.04921 8.44425C6.85473 8.91412 6.80384 9.43115 6.90299 9.92996C7.00213 10.4288 7.24685 10.8869 7.60620 11.2466C7.96555 11.6062 8.42339 11.8511 8.92182 11.9503C9.42025 12.0495 9.93688 11.9986 10.4064 11.804C10.8759 11.6094 11.2772 11.2798 11.5595 10.8569C11.8419 10.434 11.9926 9.93688 11.9926 9.4283C11.9919 8.74652 11.7210 8.09286 11.2392 7.61077C10.7575 7.12868 10.1044 6.85755 9.4231 6.85687Z"
      fill="#FB631C"
    />
    <path
      d="M9.42144 24L2.19606 15.4723C2.09566 15.3442 1.99631 15.2154 1.89800 15.0857C0.663776 13.4587 -0.00298162 11.4713 1.00235e-05 9.42857C1.00235e-05 6.92796 0.992623 4.52977 2.75948 2.76156C4.52635 0.993365 6.92272 0 9.42144 0C11.9202 0 14.3165 0.993365 16.0834 2.76156C17.8503 4.52977 18.8429 6.92796 18.8429 9.42857C18.8459 11.4704 18.1794 13.4568 16.9457 15.0831L16.9449 15.0857C16.9449 15.0857 16.6879 15.4234 16.6494 15.4689L9.42144 24ZM3.26497 14.0529C3.26668 14.0529 3.46538 14.3169 3.51078 14.3734L9.42144 21.3497L15.3398 14.364C15.3775 14.3169 15.5779 14.0511 15.5788 14.0503C16.5870 12.7210 17.1319 11.0975 17.1299 9.42857C17.1299 7.38262 16.3178 5.42046 14.8721 3.97375C13.4265 2.52704 11.4659 1.71429 9.42144 1.71429C7.37704 1.71429 5.41636 2.52704 3.97075 3.97375C2.52514 5.42046 1.71300 7.38262 1.71300 9.42857C1.71120 11.0985 2.25582 12.7229 3.26497 14.0529Z"
      fill="#FB631C"
    />
  </SvgIcon>
);

export const agentProfileDetails = [
  {
    title: "Arman khan",
    locationIcon: locationIcon,
    location: "Karachi, Pakistan",
    salesIcon: salesIcon,
    numberOfSale: "46 for sale",
    rentIcon: rentIcon,
    numberOfRent: "46 for rent",
    buttonTitle: "Let's Talk",
  },

  

//   {
//     saleTitle: "46 Properties For Sale",
//     view: "View All",
//     PropertyNumber1: "34",
//     PropertieName1: "Plots",
//     PropertyNumber2: "7",
//     PropertieName2: "Houses",
//     PropertyNumber3: "5",
//     PropertieName3: "Commercials",
//   },
//   {
//     rentitle: "46 Properties For Rent",
//     view: "View All",
//     PropertyNumber1: "34",
//     PropertieName1: "Plots",
//     PropertyNumber2: "7",
//     PropertieName2: "Houses",
//     PropertyNumber3: "5",
//     PropertieName3: "Commercials",
//   },
];

export const SliderCardData = [
    {
        title: "Index Industrial Park",
        location: "Hub Rever Road",
        startingFrom: "Pak 3.0 Crore",
        seeDetail : "See Details"
    },
    {
        title: "Gulshan-e-Iqbal",
        location: "Hub Rever Road",
        startingFrom: "Pak 3.0 Crore",
        seeDetail : "See Details"
    },
    {
        title: "Gulshan-e-Johar",
        location: "Hub Rever Road",
        startingFrom: "Pak 3.0 Crore",
        seeDetail : "See Details"
    },
    {
        title: "Malir",
        location: "Hub Rever Road",
        startingFrom: "Pak 3.0 Crore",
        seeDetail : "See Details"
    },
  ]
