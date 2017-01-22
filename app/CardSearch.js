import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AvTimer from 'material-ui/svg-icons/av/av-timer';
import DateRange from 'material-ui/svg-icons/action/date-range';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Star from 'material-ui/svg-icons/toggle/star';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  card: {
    maxWidth: 600,
    width: 'auto',
    margin: 'auto',
    marginTop:10,
    
  },

   chip: {
    margin: 4,
  },

  title: {
    paddingRight: 16, 
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 1.2,
    textDecoration: 'none',
    display: 'inline-block'
  },

  text: {
    marginTop: '-25px', 
    paddingLeft: 16 ,
    paddingRight:16,
    color: '#757575',
    lineHeight: 1.25,
    fontSize: 14,
    height: 100,
    overflow: 'hidden',
    textDecoration: 'none',
    display: 'inline-block'
  },

  category: {
    color: '#757575', 
    float: 'right', 
    border: '1.8px solid #1BBC9B',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    marginRight: 8,
    textDecoration: 'none',
    display: 'inline-block'
  },

  readmore: {
    color: '#757575', 
    paddingLeft: 16, 
    fontSize: 13,
    marginTop: 10,
    textDecoration: 'none',
    display: 'inline-block'
  }
};

class CardSearch extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

        $(document).ready(function(){
       $("img.lazy").show().lazyload(
      {
        effect : "fadeIn",
        placeholder: null,
        skip_invisible : true
      }
      );
    });


    return (
      <Link to= {{pathname: '/details' ,state: this.props ,query: {'title': this.props.title}}}>
  <Card style={styles.card}>
  
    <CardMedia >
    <div className="animated-background" style={{ objectFit: 'cover'}}>
      <img className="lazy" data-original={this.props.image_url} height="150px" width='100%' style={{height: 150, width: "100%" ,objectFit: 'cover'}}/>
    </div>
    </CardMedia>
    <CardTitle title={this.props.title} titleStyle = {styles.title} />
    <CardText style = {styles.text}>
    
    <div style={{  display: 'flex',flexWrap: 'wrap', marginBottom: 10}}>
    <Chip style={styles.chip}>
    <Avatar color="#444" icon={<DateRange />} />
    {this.props.releaseDate}
  </Chip>


  <Chip style={styles.chip}>
    <Avatar color="#444" icon={<AvTimer />} />
    {this.props.duration}
  </Chip>

   <Chip style={styles.chip}>
    <Avatar color="#444" icon={<Star />} />
    {this.props.imdb_rating}
  </Chip>

  <Chip style={styles.chip}>
    <Avatar color="#444" icon={<ThumbUp />} />
    {this.props.imdb_votes}
  </Chip>
  </div>
    {this.props.desc}
    
    </CardText>
    <div style = {{paddingBottom: 10, paddingTop: 5}}>
      <div style = {styles.readmore}>
        READ MORE
      </div>
        
        
      <div style={styles.category}>
        {this.props.category}
      </div> 
    </div>

  </Card>
  </Link>
    );
  }
}

export default CardSearch;