import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ApplyPromo = () => {
  return (
    <div>
         <Accordion
                        className="!bg-transparent !shadow-none !border-none"
                        disableGutters>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className="!bg-[#eeeeee] px-4 py-5 !min-h-[60px] flex items-center">
                          <span className="text-base font-semibold text-gray-800">
                            APPLY A PROMO CODE
                          </span>
                        </AccordionSummary>
                        <AccordionDetails className="!px-0 !py-5">
                          <div className="w-full flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="Enter a promo code"
                              className="w-full border border-gray-300 px-4 py-4 text-gray-700 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <button className="bg-gray-300 text-gray-700 font-bold py-4 px-7 rounded">
                              APPLY
                            </button>
                          </div>
                        </AccordionDetails>
                      </Accordion>
    </div>
  )
}

export default ApplyPromo