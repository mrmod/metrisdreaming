import React from 'react'
import ReactDOM from 'react-dom'

import {
    Button,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Typography,
    withStyles,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/FindInPage'
import VanIcon from '@material-ui/icons/AirportShuttle'
import AlgoliaIcon from '@material-ui/icons/ListAlt'

import dealerships from './src/dealerships'

const styles = {
    dealershipRoot: {

    },
    dealershipsRoot: {
        
    },
    layout: {
        display: 'flex',
        width: '400px',
    },
    vanRoot: {
        background: '#7b86c'
    }
}

const matchField = (field) => {
    if (!field) {
        return false
    }
    const exp = /metris/i
    const match = field.match(exp)

    return match ? match[0] : false
}
const hitFields = ["model", "title", "title_vrp"]
/**
 * Search through Algolia/Elastic hits for a metris
 */
const searchAlgoliaResponse = (response) => {
    let hasMetris = false
    if (response.results) {
        response.results.forEach(result => {
            if (result.hits) {
                result.hits.forEach(hit => {
                    hitFields.forEach(field => {
                        if (matchField(hit[field])) {
                            hasMetris = true
                        }
                    })
                })
            }
        })
    }
    return hasMetris
}

const useStyles = makeStyles(styles)
const metrisExpression = /20[0-9]{2}[A-Za-z\ \t_-]*Metris/
const apiProxy = "http://localhost:5000"
const Dealership = (props) => {
    const [isSearching, setIsSearching] = React.useState(false)
    const [hasResult, setHasResult] = React.useState(null)
    const [lastSearched, setLastSearched] = React.useState(null)
    const classes = useStyles()

    const hasMetris = () => {
        setIsSearching(true)
        const headers = {'Content-Type': 'application/json'}
        
        if (props.config) {
            fetch(apiProxy, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(props.config)
            })
            .then(response => response.json())
            .then(searchAlgoliaResponse)
            .then(setHasResult)
            .finally(() => {
                setIsSearching(false)
                setLastSearched(new Date())
            })

        } else {
            fetch(apiProxy, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({"url": btoa(props.url)})
                })
                .then(response => response.text())
                .then(text => text.match(metrisExpression))
                .then(result => {
                    
                    if (result) {
                        setHasResult(result[0])
                    }
                })
                .finally(() => {
                    setIsSearching(false)
                    setLastSearched(new Date())
                })
        }
    }
    
    return (<ListItem
        style={{
            background: isSearching ? 'rgb(220, 220, 220)' : 'rgb(240, 240, 240)',
            borderBottom: '0.1px solid black',
        }} >
        <ListItemText
            primary={<React.Fragment>

                    <Typography variant="h6">
                        Dealership&nbsp;
                        <Link target="_blank" href={props.url}>
                            {props.name}
                        </Link>
                    </Typography>
                    {props.config ? (<div style={{display: 'flex'}}>
                        <AlgoliaIcon />

                        <Typography variant="body1">
                            Uses Algolia
                        </Typography>
                        </div>) : null}
                    <Button
                        variant="outlined"
                        startIcon={<SearchIcon />}
                        aria-label="Check for Metris"
                        onClick={() => hasMetris()}>
                        Check for Metris
                    </Button>
                    
                    {hasResult ? (<IconButton
                        classes={{root: classes.vanRoot}}
                        href={props.url}>
                            <VanIcon /> Might have a Metris
                    </IconButton>) : null}
            </React.Fragment>}
            secondary={lastSearched && `Last searched ${lastSearched}`}
        />
    </ListItem>)
}

const byName = (a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1

const Dealerships = () => {

    return (<List>
        {dealerships.sort(byName).map(dealership => (<Dealership key={dealership.name} {...dealership} />))}
      </List>)
}

class Root extends React.Component {
    render() {
        return (<div>
            <Typography variant="h2"> Mercedes Benz Dealerships </Typography>
            <Dealerships />
        </div>)
    }
}
const StyledRoot = withStyles(styles)(Root)

ReactDOM.render(<StyledRoot />, document.getElementById('app'))