import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Header from '../../components/Header'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What are the impacts of this dashboard on hipsters?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Sustainable chia asymmetrical fingerstache. Bushwick iPhone forage yr coloring book meggings salvia aesthetic banjo YOLO microdosing. Kogi knausgaard heirloom DIY street art meggings. Chicharrones hashtag sartorial blog big mood, affogato letterpress. Street art 8-bit jawn mumblecore meggings XOXO. Banjo neutra air plant biodiesel gluten-free, post-ironic whatever dreamcatcher irony.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What can we analyze from the hipster data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Waistcoat thundercats wolf blackbird spyplane gentrify incididunt knausgaard banjo velit slow-carb DIY ennui adipisicing occupy cornhole. Nostrud hella viral, photo booth lumbersexual locavore twee gochujang helvetica same keffiyeh magna narwhal sint. Banh mi big mood gastropub affogato irony flannel normcore occaecat. Kombucha YOLO activated charcoal kale chips raw denim minim actually aesthetic.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Will I become a hipster if I use hipster ipsum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          I'm baby snackwave keffiyeh meggings cupping master cleanse hell of gentrify hella fashion axe direct trade roof party shaman gastropub praxis. Selfies vegan deep v, street art tumeric chillwave adaptogen migas blackbird spyplane pug shoreditch hashtag bushwick chia. Lomo fit raclette woke mumblecore whatever. Marxism chicharrones before they sold out man bun, blog irony thundercats master cleanse try-hard selvage shoreditch gochujang praxis flexitarian. Vinyl tote bag freegan, chillwave succulents hammock blog poke. Tilde gastropub blue bottle, polaroid selvage VHS lumbersexual unicorn mumblecore roof party.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            How do hipsters affect the market as a whole?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Heirloom dolore retro meh pabst. Ut blue bottle hexagon chambray literally. Shaman est exercitation, woke aliqua franzen chicharrones celiac. Minim small batch tbh, consequat biodiesel pok pok pinterest cillum nisi voluptate marxism letterpress officia meh. Chia godard keytar cupidatat, kombucha dolore man bun neutra fashion axe enim. Brooklyn af iPhone, DIY eiusmod slow-carb man braid mukbang pickled reprehenderit in taxidermy freegan.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Where do hipsters come from?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Williamsburg 90's meditation, flannel eu food truck organic photo booth stumptown. Twee listicle pop-up, skateboard quis yes plz small batch before they sold out organic. Pug pour-over cupping, enamel pin cold-pressed incididunt marxism gochujang put a bird on it blog. Neutra banjo prism gatekeep try-hard et. Snackwave hot chicken bespoke intelligentsia YOLO, crucifix tbh. Proident mlkshk selvage pariatur in pitchfork yes plz keffiyeh consectetur pop-up organic pour-over.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Will I become a hipster if I read hipster ipsum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Mukbang hexagon direct trade, meh neutral milk hotel twee post-ironic same listicle keytar. Trust fund tbh meh cold-pressed williamsburg intelligentsia. Humblebrag JOMO semiotics, aesthetic kickstarter organic banjo. Direct trade bushwick taxidermy meditation vinyl listicle pug quinoa pop-up fashion axe. Vibecession try-hard ramps snackwave bespoke viral selfies quinoa roof party green juice typewriter bitters pok pok yuccie. Disrupt +1 raclette, PBR&B leggings try-hard live-edge jianbing letterpress tonx godard JOMO.
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ