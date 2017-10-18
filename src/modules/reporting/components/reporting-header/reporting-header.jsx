import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Styles from 'modules/reporting/components/reporting-header/reporting-header.styles'

export default class ReportingHeader extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props)

    this.state = {
      daysLeft: 9,
      endDate: 'November 20, 2017',
      totalStake: 1,
    }
  }

  render() {
    const s = this.state

    const currentPeriodStyle = {
      width: `${((27 - s.daysLeft) / 27) * 100}%`
    }

    return (
      <article className={Styles.ReportingHeader}>
        <div className={Styles.ReportingHeader__header}>
          <div>
            <h1 className={Styles.ReportingHeader__heading}>Reporting</h1>
            <span className={Styles.ReportingHeader__endDate}>Reporting cycle ends { s.endDate }</span>
          </div>
          <div>
            <span className={Styles.ReportingHeader__stake}>Total Stake: { s.totalStake } REP</span>
          </div>
        </div>
        <div className={Styles['ReportingHeader__graph-wrapper']}>
          <div className={Styles.ReportingHeader__graph}>
            <div className={Styles['ReportingHeader__graph-current']}>
              <div style={currentPeriodStyle}>
                <span>{ s.daysLeft } days left</span>
              </div>
            </div>
            <div className={Styles['ReportingHeader__graph-dispute']} />
          </div>
          <div className={Styles.ReportingHeader__labels}>
            <span>Current Cycle</span>
            <span>Dispute</span>
          </div>
        </div>
      </article>
    )
  }
}