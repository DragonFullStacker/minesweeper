import { orange } from '@mui/material/colors';
import React from 'react'
import Faq from "react-faq-component";

const FaqSect = () => {


    const data = {
        title: "",
        rows: [
            {
                title: "How to buy on GetBlack?",
                content: `Follow our easy tips to completely enjoy your buying experience on GetBlack: <br/><br/>

                <b>1. Search for the item</b>
                Find what you need by using a search panel with filters, so that you can select exactly what you want.
                <br/><br/>
                <b>2. Contact a seller</b>
                You can arrange a face-to-face meeting to discuss certain issues or to haggle over the price by contacting a vendor through phone or by chatting on GetBlack.
                <br/><br/>
                P.S. We also recommend you watch the short video guide below for a better understanding`,
            },
            {
                title: "How to report illegal activity on GetBlack?",
                content:
                    `Please let us know if you spot anything fishy on Getblack by taking the actions listed below:
                    <br/><br/>
                    Click on <b>'Report abuse'</b><br/><br/>
                    Select the <b>reason</b> for your suspicion:<br/>
                    Type in your comment with all the details that can help us understand the case better and click on the <b>'Send'</b> button.<br/><br/>
                    Your request will be taken into account by our support managers. If your report demonstrates that we have encountered a fraud situation, we will immediately block such a vendor.
                    <br/><br/>
                    Your vigilance will make the GetBlack platform safer for millions of users.
                    <br/><br/>
                    Safety first!`
            },
            {
                title: "How do I contact Support Team?",
                content: `Please choose the live chat or email option that is most convenient for you to reach out to our support team. `,
            },
            {
                title: "How to leave feedback about the seller?",
                content: `If you've interacted with the seller in any way, the opportunity to provide feedback becomes accessible.<br/><br/>

                Click on the button <b>"Leave feedback"</b>. You can find it on the advert page or on the seller's profile;<br/><br/>
                Rate your experience. Select one of the smileys to specify how satisfied you are with the experience you have had;<br/><br/>
                Provide detailed feedback about the seller. For example, tell more about how your communication went: were you treated with respect or are you left with a bad feeling? Ensure you also specify if you're satisfied with the product and how the delivery went;<br/><br/>
                Click on "Send feedback"<br/><br/>
                We review all feedback to ensure they are relevant and in line with our rules. It will become available online and visible to all Jiji users as soon as it's reviewed
                <br/><br/>
                <b>Thanks for every feedback you leave! You help us a lot in building the safest place for making all kinds of deals!</b>`,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'orange',
        titleTextColor: "black",
        titleBgColor: "blue",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        arrowColor: "orange",
    };
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    

  return (
    <div className='faq-main'>
        <h1 className='faq-title'>Frequently asked questions</h1>
    <Faq
                data={data}
                styles={styles}
                config={config}
            />
    </div>
  )
}

export default FaqSect