import React from 'react'
import { Box, Container, Typography, AppBar, Toolbar, Button, Card, CardContent, Grid, Chip, Stack, Fade } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from './contexts/LanguageContext'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

function App() {
  const { t, language, setLanguage } = useLanguage()

  return (
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
        <AppBar position="sticky">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
                {t('header.name')}
              </Typography>
              <Button
                color="inherit"
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                sx={{ color: 'text.primary' }}
              >
                {language === 'en' ? '中文' : 'English'}
              </Button>
            </Toolbar>
          </motion.div>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Typography variant="h4" gutterBottom>
                        {t('intro.title')}
                      </Typography>
                      {/* Contact info under intro title */}
                      <Stack spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <EmailIcon color="primary" />
                          <Typography component="a" href={`mailto:${t('contact.email')}`} sx={{ textDecoration: 'none', color: 'inherit' }}>{t('contact.email')}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <PhoneIcon color="primary" />
                          <Typography component="a" href={`tel:${t('contact.phone')}`} sx={{ textDecoration: 'none', color: 'inherit' }}>{t('contact.phone')}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <LinkedInIcon color="primary" />
                          <Typography component="a" href={t('contact.linkedin')} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>{t('contact.linkedin')}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <CodeIcon color="primary" />
                          <Typography component="a" href={t('contact.website')} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>{t('contact.website')}</Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Experience Section */}
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        <WorkIcon color="primary" />
                        <Typography variant="h5">{t('experience.title')}</Typography>
                      </Stack>
                      {t('experience.items').map((exp, index) => (
                        <Box key={index} mb={index !== t('experience.items').length - 1 ? 3 : 0}>
                          <Typography variant="h6" gutterBottom>
                            {exp.title}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {exp.duration}
                          </Typography>
                          <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                            {exp.details.map((detail, idx) => (
                              <Typography component="li" key={idx} variant="body2">
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Education Section */}
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        <SchoolIcon color="primary" />
                        <Typography variant="h5">{t('education.title')}</Typography>
                      </Stack>
                      {t('education.items').map((edu, index) => (
                        <Box key={index}>
                          <Typography variant="h6" gutterBottom>
                            {edu.school}
                          </Typography>
                          {/* Render each degree/certificate on a separate line if degree is an array */}
                          {Array.isArray(edu.degree) ? (
                            <Box>
                              {edu.degree.map((deg, i) => (
                                <Typography variant="subtitle1" gutterBottom key={i}>
                                  {deg}
                                </Typography>
                              ))}
                            </Box>
                          ) : (
                            <Typography variant="subtitle1" gutterBottom>
                              {edu.degree}
                            </Typography>
                          )}
                          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {edu.duration}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {edu.gpa}
                          </Typography>
                          <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                            {edu.details.map((detail, idx) => (
                              <Typography component="li" key={idx} variant="body2">
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Projects Section */}
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        <CodeIcon color="primary" />
                        <Typography variant="h5">{t('projects.title')}</Typography>
                      </Stack>
                      {t('projects.items').map((project, index) => (
                        <Box key={index} mb={index !== t('projects.items').length - 1 ? 3 : 0}>
                          <Typography variant="h6" gutterBottom>
                            {project.title}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {project.duration}
                          </Typography>
                          <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                            {project.details.map((detail, idx) => (
                              <Typography component="li" key={idx} variant="body2">
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Skills Section */}
              <Grid item xs={12}>
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                        <CodeIcon color="primary" />
                        <Typography variant="h5">{t('skills.title')}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {t('skills.items').map((skill, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Chip label={skill} sx={{ m: 0.5 }} />
                          </motion.div>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
  )
}

export default App