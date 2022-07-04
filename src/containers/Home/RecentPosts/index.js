import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted onJuly 04, 2022 by Rohit Pareek</span>
                <p> I Love My Body and Want to Give it What it Needs .Your workout is meant to make you feel good, not to serve as a punishment. It’s so important to remember that exercising is an act of self-love. The more of it you have for yourself, the more likely you are to stick to your goals. Our bodies naturally want to move, so show yourself some love by working up a sweat! If you catch yourself in a pattern of negative self-talk, take a minute to repeat this positive affirmation: “I want to work out because I love my body. I want to workout to give my mind and body what it needs”.</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts