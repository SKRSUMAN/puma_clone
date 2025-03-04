import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardDetails from '../cart/CardDetails';

const OrderDetails = () => {
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
                    ORDER DETAILS{" "}(3)
                  </span>
                </AccordionSummary>
                <AccordionDetails className="!px-0 !py-5">
                  <div className="w-full flex items-center gap-2">
                   <CardDetails/>
                  </div>
                </AccordionDetails>
              </Accordion>
    </div>
  )
}

export default OrderDetails