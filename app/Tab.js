import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardSearch from './CardSearch';
import SwipeableViews from 'react-swipeable-views';
import cardHelpers from './utils_card';
import { bindKeyboard } from 'react-swipeable-views-utils';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {topmovies} from './top'

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
    color: '#b31217'
  },

   label: {
  paddingLeft: 30,
  paddingRight: 30,
 },

  textunderline: {
    borderColor: '#b31217'
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
    backgroundColor: '#b31217' ,
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
      movies: topmovies
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
          inkBarStyle = {{backgroundColor: '#000000'}}
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
                floatingLabelText="Movie/Series Title"
                                floatingLabelFocusStyle={styles.textbox}
                errorText={this.state.name_error_text}
                underlineFocusStyle={styles.textunderline}
                onChange={this.onChangeName}
                fullWidth={true}
              />

            <div style={{textAlign: 'center'}}>
              <RaisedButton
                label="Search"
                backgroundColor='#b31217'
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
                down_link={"https://fmovies.se/search?keyword="+searchdata.Title}
              />
            </div>
          </div>
        </div>


        <div>
            {this.state.movies.map(function(movie)
              {
              return (
              <div style = {styles.borderMargin} className="animated slideInUp" >
                <CardSearch
                    title={movie[0]}
                    category={movie[4]}
                    desc={movie[8]}
                    image_url={movie[12]}
                    actors={movie[7]}
                    awards={movie[11]}
                    director={movie[5]}
                    lang={movie[9]}
                    releaseDate={movie[2]}
                    duration={movie[3]}
                    writer={movie[6]}
                    year={movie[1]}
                    imdb_id={movie[16]}
                    imdb_rating={movie[14]}
                    imdb_votes={movie[15]}
                    down_link={movie[18]}
                />
                </div>
              )
            }
          )
        }
      </div>


        </BindKeyboardSwipeableViews>
        </div>



    );
  }
}
