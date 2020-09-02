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
import VanIcon from '@material-ui/icons/AirportShuttle';
const dealerships = [
    {
        name: 'Pleasonton',
        url: 'https://www.mbofpleasanton.com/used-cars-pleasanton-ca.html?Make=Mercedes-Benz',
    },
    {
        name: 'San Jose',
        url: 'https://www.mercedesbenzofsanjose.net/used-cars-san-jose-ca?_gmod%5B0%5D=Dfe_Modules_VehiclePrice_Module&_gmod%5B1%5D=Dfe_Modules_CustomizePayment_Module&direction=asc&t=u&make[]=Mercedes-Benz',
    },
    {
        name: 'Stevens Creek',
        url: 'https://www.mbofstevenscreek.net/used-cars-san-jose-ca?_gmod%5B0%5D=Dfe_Modules_VehiclePrice_Module&_gmod%5B1%5D=Dfe_Modules_CustomizePayment_Module&direction=asc&t=u&make[]=Mercedes-Benz&sf=sf_make',
    },
    {
        name: 'Monterey',
        url: 'https://express.montereymercedes.com/inventory/used?deal_type=cash&f=make%3AMercedes-Benz&sort=lowest%20price',
    },
    {
        name: 'Fremont (Fletcher Jones)',
        url: 'https://www.mboffremont.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'Walnut Creek',
        url: 'https://www.mbofwalnutcreek.com/used-cars/walnut-creek.htm?search=&saveFacetState=true&make=Mercedes-Benz&lastFacetInteracted=inventory-listing1-facet-anchor-make-20',
    },
    {
        name: 'San Francisco',
        url: 'https://express.sfbenz.com/inventory/used?deal_type=cash&f=make%3AMercedes-Benz',
    },
    {
        name: 'Marin',
        url: 'https://www.mbofmarin.com/searchused.aspx?Make=Mercedes-Benz',
    },
    {
        name: 'Santa Rosa',
        url: 'https://www.mbofsantarosa.com/used-vehicles/?_dFR%5Bmake%5D%5B0%5D=Mercedes-Benz&_dFR%5Btype%5D%5B0%5D=Pre-Owned&_dFR%5Btype%5D%5B1%5D=Certified%2520Pre-Owned&_paymentType=our_price',
    },
    {
        name: 'Fairfield',
        url: 'https://express.mercedesfairfield.com/inventory/used?deal_type=finance&f=make%3AMercedes-Benz',
    },
    {
        name: 'Modesto',
        url: 'https://express.mbofmodesto.com/inventory/used?deal_type=cash&f=make%3AMercedes-Benz',
    },
    {
        name: 'Portland, OR',
        url: 'https://www.mercedesbenzportland.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'Eugene, OR',
        url: 'https://www.mbeugene.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'Medford, OR',
        url: 'https://www.mbmedford.com/pre-owned-cars-medford-or?_gmod%5B0%5D=Dfe_Modules_VehiclePrice_Module&_gmod%5B1%5D=Dfe_Modules_CustomizePayment_Module&direction=asc&t=u&make[]=Mercedes-Benz&sf=sf_make',
    },
    {
        name: 'Bend, OR',
        url: 'https://www.mbofbend.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'Sacremento',
        url: 'https://www.mbsacramento.com/pre-owned-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'Reno, NV',
        url: 'https://www.mercedesbenzofreno.net/used-cars-reno-nv?_gmod%5B0%5D=Dfe_Modules_VehiclePrice_Module&_gmod%5B1%5D=Dfe_Modules_CustomizePayment_Module&direction=asc&t=u&make[]=Mercedes-Benz&sf=sf_make',
    },
    {
        name: 'Fresno',
        url: 'https://www.mboffresno.com/used-inventory/index.htm?listingConfigId=auto-used&year=&make=Mercedes-Benz&bodyStyle=&odometer=&internetPrice=&start=0&sort=&facetbrowse=true&searchLinkText=SEARCH&showInvTotals=false&showRadius=false&showReset=false&showSubmit=true&facetbrowseGridUnit=BLANK&showSelections=true&dependencies=model%3Amake%2Ccity%3Aprovince%2Ccity%3Astate&suppressAllConditions=true',
    },
    {
        name: 'Bakersfield',
        url: 'https://www.mbofbakersfield.com/used-vehicles/?_dFR%5Bmake%5D%5B0%5D=Mercedes-Benz&_dFR%5Btype%5D%5B0%5D=Pre-Owned&_dFR%5Btype%5D%5B1%5D=Certified%2520Pre-Owned&_paymentType=our_price'
    },
    {
        name: 'Santa Barabara',
        url: 'https://www.mercedessantabarbara.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    },
    {
        name: 'El Dorado Hills',
        url: 'https://www.mbofedh.com/used-vehicles/#action=im_ajax_call&perform=get_results&make%5B%5D=Mercedes-Benz&page=1',
    }
]
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
const useStyles = makeStyles(styles)
const metrisExpression = /20[0-9]{2}[A-Za-z\ \t_-]*Metris/
const Dealership = (props) => {
    const [isSearching, setIsSearching] = React.useState(false)
    const [hasResult, setHasResult] = React.useState(null)
    const [lastSearched, setLastSearched] = React.useState(null)
    const classes = useStyles()
    const hasMetris = () => {
        setIsSearching(true)
        const headers = {'Content-Type': 'application/json'}
        // fetch(props.url)
        fetch("http://localhost:5000", {
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