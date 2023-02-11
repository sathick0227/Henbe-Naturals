import React,{useState} from 'react'
import './Styles/FAQ.css';
import { AiFillCaretDown } from "react-icons/ai";
import faqData from "./faqData";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
{
  title:"1.Are your products environmentally friendly?",
  content:"Yes, all of our products are made with natural, eco-friendly ingredients and materials, and we are committed to minimizing our impact on the environment.",
  
},
{
  title:"2.Are your products cruelty-free?",
  content:"Yes, all of our products are cruelty-free and never tested on animals.",
  
},
{
  title:"3.What payment methods do you accept?",
  content:"We accept major credit cards,Debit cards, UPI, and bank transfers.",
  
},
{
  title:"4.How long will it take to receive my order?",
  content:"Orders are typically processed and shipped within 3-5 business days. Shipping time will depend on your location and the shipping method you choose.",
  
},
{
  title:"5.Do you offer free shipping?",
  content:"We offer free shipping on orders over a certain amount. Please see our shipping policy for details.",
  
},
{
  title:"6.What is your return policy?",
  content:"We accept returns within 7 days of purchase for unused and unopened products. Please see our return policy for full details.",
    
},
{
  title:"7.How do I contact customer support?",
  content:"You can contact our customer support team via email, phone, or live chat. Our support hours are Monday to Friday from 9am to 5pm.",
  
},
{
  title:"8.Where are your products made?",
  content:"Our products are made using locally sourced ingredients in Thanjavur.",
    
},
{
  title:"9.Are your products safe for people with allergies?",
  content:"Our products are made from natural ingredients and are free from common allergens. However, if you have a specific allergy, we recommend checking the ingredient list before making a purchase.",
    
},
{
  title:"10.Do you offer any discounts or promotions?",
  content:"Yes, we offer regular discounts and promotions to our customers. Sign up for our newsletter to stay informed about our latest offers.",
    
}
],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "blue",
    rowTitleTextSize:"18px",
    rowContentTextSize: '17px',
    rowContentPaddingLeft: '50px',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "v",
    // tabFocus: true
};

export default function FAQ() {


    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
	
