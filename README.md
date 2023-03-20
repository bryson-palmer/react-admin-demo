# React Enterprise Demo
### Enterprise Level and Industry Standard

#### Purspose:
To capture the look and feel of the UI I've been working on in AROYA for the last 1.5 years, I built this demo app following *Ed Roh's* [react-admin-dashboard](https://github.com/ed-roh/react-admin-dashboard) tutorial. Leveraging enterprise level dependencies, this app includes a css grid dashboard, nivo charts, material ui tables, & a formik/yup form.

---

#### Dependencies:
- Material UI/Icons/X Data Grid
- React Pro Sidebar
- React Router Dom
- FullCalendar
- Nivo
- Formik
- yup

---

#### Theme:
I wanted to set up a theme similar to what I was using in AROYA and switch between light and dark mode. Theme was created with Material UI and context was created with React Context. Used Tailwind Shades to create the object of shade vlaues given a hex color. This made for very convenient set up of reusable styles. 

#### Scenes:
The scenes **Manage Team**, **Contacts Information**, & **Invoices Balances** utilized the mui grid table with sorting and filtering capabilities. the **Profile Form** scene was built using Formik for form state and yup for validation. I have spent quite a bit of time with formik in my previous job and was happy to build this form. the **Calendar** scene was built with FullCalendar. I have never used it before but it was easy to set up, looks clean, and looks like there is some real calendar power in there. The **FAQ** scene is a list of Mui accordions with questions about hipsters and the hipster lorem ipsum answers. The scenes **Bar Chart**, **Pie Chart**, **Line Chart**, & **Geaography Chart** were all built using nivo charts. I have to say they look pretty cool. There some great looking charts in my last job so I wanted to caputre some of that here. All the charts are slightly animated and clickable.

#### Data:
The data is coming from a mock data file with static values. It was great to have that provided so the time could be spent on building the components and hooking up the UI.

#### Conclusion
Overall, this was exactly the first bigger demo I wanted to build. It had Mui for the UI library, charts, graphs, tables, and more. The colors are similar to my old job and this UI was very comforting to work in. The code is much different however. I really just followed the tutorial here. There were times that blocks of jsx were just copied multiple times to create different boxes when something more abstract and less repetetive would have been better. I understand whey the choice was made to just copy and paste but I made mental notes of place that would get upgraded. There were a couple of updates that needed to happen as some of the dependencies made small breaking changes. They were easily fixed. I give this tutorial two thumbs up and it was exactly what I was looking to build.