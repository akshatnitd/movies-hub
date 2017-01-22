import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardSearch from './CardSearch';
import SwipeableViews from 'react-swipeable-views';
import cardHelpers from './utils_card';
import { bindKeyboard } from 'react-swipeable-views-utils';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

var searchdata={};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
 } ,

  tabLabel : {
    minWidth: 60,
 } ,

 textbox: {
    color: '#1BBC9B'    
  },

   label: {
  paddingLeft: 30,
  paddingRight: 30,
 },

  textunderline: {
    borderColor: '#1BBC9B'    
  },

    borderMarginSearch: {
    margin: 'auto',
    marginTop: 25,
    padding: 20,
    maxWidth: 600}
  
,

  borderMargin : {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  } ,

  tabBar: {
    backgroundColor: '#1BBC9B' ,
    overflowX: 'scroll',
    height: 'auto',
  }} 

export default class TabsControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      name: '',
      name_error_text: '',
    };
  }

  handleChange = (value) => {

    this.setState({
      slideIndex: value,
    });
  }

  onChangeName = (e) => {
    this.setState({name: e.target.value});
  }

  onClickSearch = () => {

    var err=0;
      if(this.state.name.length == 0 )
    {
      err=err+1;
      this.setState({name_error_text: "Please enter the movie/series name"});
    }
    
    else
      this.setState({name_error_text: ""});

    if (err==0)
    {
      searchdata= cardHelpers.getSearchCard(this.state.name);

      if(searchdata.Response == "True")
      {
        document.getElementById('search_card').style.display='block';
      }
      else
      {
        document.getElementById('search_card').style.display='none';
        this.setState({name_error_text: "No search results found"});

      }
    }

  }
  
  render() {
     return (
      <div>
       <Tabs
          className="tabbar"
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle= {styles.tabBar}
          inkBarStyle = {{backgroundColor: '#F72459',width: 60, display:'none'}} 
        >
          <Tab label="Search by name" value={0} style={styles.tabLabel}  />
          <Tab label="Top rated movies" value={1} style={styles.tabLabel}  />
        </Tabs>

        <BindKeyboardSwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          resistance = {true} >

        <div>
        <div style={styles.borderMarginSearch}>
         <TextField
            defaultValue=""
            floatingLabelText="Movie/Search Title"
            floatingLabelFocusStyle={styles.textbox}
            errorText={this.state.name_error_text}
            underlineFocusStyle={styles.textunderline}
            onChange={this.onChangeName}
            fullWidth={true}
            />

            <div style={{textAlign: 'center'}}>
          <RaisedButton 
            label="Search" 
            backgroundColor='#1bbc9b' 
            labelColor="#FFFFFF" 
            labelStyle={styles.label} 
            style={{marginTop: 30}}
            onClick={this.onClickSearch} 
            id="search_by_name"/>       
        </div>
        <div id="search_card" style={{display:'none'}}>
        <CardSearch
          title={searchdata.Title} 
          category={searchdata.Genre} 
          desc={searchdata.Plot} 
          image_url={searchdata.Poster} 
          actors={searchdata.Actors}
          awards={searchdata.Awards}
          director={searchdata.Director}
          lang={searchdata.Language}
          releaseDate={searchdata.Released}
          duration={searchdata.Runtime}
          writer={searchdata.Writer}
          year={searchdata.Year}
          imdb_id={searchdata.imdbID}
          imdb_rating={searchdata.imdbRating}
          imdb_votes={searchdata.imdbVotes}
          />
        </div>

        </div>
        </div>

        
        </BindKeyboardSwipeableViews>

      

      </div>
    );
  }
}
