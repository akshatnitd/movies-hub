import React from 'react';
import {grey900} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArticleCard from './ArticleCard';


const styles = {
	 borderMargin: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1000,
    marginTop: 10,
  },


  paper: {
    height: 'auto',
    width: 'auto',
    margin: 'auto',
    maxWidth: 1000,
    fontSize: 16,
    padding: 10,
    paddingLeft: 15,
    color: '#757575'
  
  },

  card : {
    maxWidth: 1000,
    margin: 'auto',
  }
  
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  fontFamily: 'Roboto, sans-serif',

  raisedButton : {
    color: '#b31217',
    textColor: '#FFFFFF'
  }
});


export default class Details extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  componentDidMount = () => {
    mixpanel.track("VIEW_MOVIE_DETAILED_SCREEN");   
  }

  componentDidUpdate = () =>  {
    mixpanel.track("VIEW_MOVIE_DETAILED_SCREEN");
  }

  render() {
    var val = this.props.location.state;

    $(document).ready(function(){
      $(window).scrollTop(0);
       $("img.lazy").show().lazyload(
      {
        effect : "fadeIn",
        placeholder: null,
        skip_invisible : true
      }
      );
    });
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <Card style={styles.card}>
      	
          <ArticleCard
          title={val.title} 
          category={val.category} 
          desc={val.desc} 
          image_url={val.image_url} 
          actors={val.actors}
          awards={val.awards}
          director={val.director}
          lang={val.lang}
          releaseDate={val.releaseDate}
          duration={val.duration}
          writer={val.writer}
          year={val.year}
          imdb_id={val.imdb_id}
          imdb_rating={val.imdb_rating}
          imdb_votes={val.imdb_votes}
          down_link={val.down_link}
      />
        
      </Card>
      	
      </div>
      </MuiThemeProvider>
    
    );
  }
};