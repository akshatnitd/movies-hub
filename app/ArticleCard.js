import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {hashHistory} from 'react-router';
import AvTimer from 'material-ui/svg-icons/av/av-timer';
import DateRange from 'material-ui/svg-icons/action/date-range';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Star from 'material-ui/svg-icons/toggle/star';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  card: {
    maxWidth: 1000,
    margin: 'auto',
    marginBottom: 10,
    paddingBottom: 15,
  },
  chip: {
    margin: 4,
  },
  title: {
    
    paddingRight: 15, 
    fontWeight: 700,
    fontSize: 28,
    paddingBottom: 10,
    paddingTop: 10
  },

  text: {
    paddingLeft: 15 ,
    paddingRight: 0,
    marginRight: 15,
    color: '#757575',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.58,
    letterSpacing: '-.003em',
  },

   category: {
    color: '#757575',  
    border: '1.8px solid #000000',
    padding: 8,
    borderRadius: 5,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    width: 'auto',
    display: 'inline-block'
  },

};


class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     $("img.lazy").lazyload({
        effect : "fadeIn",
        placeholder: null,
        skip_invisible : true
      });

    return (
    <div style={styles.card}>
    <CardMedia>
    <div className="animated-background-detailed" style={{ objectFit: 'cover'}}>
       
       <img className="lazy" data-original={this.props.image_url} style={{height: 400, width: "100%", position: 'relative', objectFit: 'cover'}}/> 
     
      </div>
  
       <div style={{position: 'absolute', top:10,}}>

        <IconButton iconStyle={{width: 28, height: 28, color: '#FFFFFF'}} onTouchTap={hashHistory.goBack}>
          <NavigationArrowBack />
        </IconButton>

        </div>     
    </CardMedia>
    
    <CardTitle title={this.props.title} titleStyle = {styles.title} />
    <div style={styles.category}>
      {this.props.category}
      </div> 
    <CardText style = {styles.text}>
      {this.props.desc}
<br />
<br />
  <div><b>Languages: </b>{this.props.lang}</div>
  <div><b>Actors: </b>{this.props.actors}</div>
  <div><b>Awards: </b>{this.props.awards}</div>
  <div><b>Director: </b>{this.props.director}</div>
  <div><b>Writers: </b>{this.props.writer}</div>
<br />        

<div style={{  display: 'flex',flexWrap: 'wrap', }}>
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
    </CardText>
  </div>
    );
  }
}


export default ArticleCard;