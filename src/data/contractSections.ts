import { ContractSection } from '../types';

export const standardContractSections: ContractSection[] = [
  {
    id: 'parties',
    title: 'Parties and Contact Information',
    defaultContent: `## 1. Parties

This Agreement (the "Agreement") is made and entered into on [DATE] by and between:

**Party A ("Client"):**
- Legal Name: [FULL LEGAL NAME]
- Address: [STREET, CITY, STATE, ZIP]
- Contact: [PHONE, EMAIL]
- Business Registration: [IF APPLICABLE]

**Party B ("Service Provider"):**
- Legal Name: [FULL LEGAL NAME]
- Address: [STREET, CITY, STATE, ZIP]
- Contact: [PHONE, EMAIL]
- Business Registration: [IF APPLICABLE]`
  },
  {
    id: 'term',
    title: 'Term and Effective Date',
    defaultContent: `## 2. Term and Effective Date

2.1. This Agreement shall commence on [START DATE] (the "Effective Date").
2.2. The initial term shall be [DURATION], ending on [END DATE].
2.3. This Agreement may be renewed for additional periods upon mutual written agreement of both parties.`
  },
  {
    id: 'services',
    title: 'Services and Deliverables',
    defaultContent: `## 3. Services and Deliverables

3.1. **Scope of Services:**
The Service Provider agrees to provide the following services to the Client:
- [DETAILED DESCRIPTION OF SERVICE 1]
- [DETAILED DESCRIPTION OF SERVICE 2]
- [DETAILED DESCRIPTION OF SERVICE 3]

3.2. **Deliverables:**
The following deliverables shall be provided according to the specified timeline:
| Deliverable | Description | Due Date |
|-------------|-------------|-----------|
| [ITEM 1] | [DESCRIPTION] | [DATE] |
| [ITEM 2] | [DESCRIPTION] | [DATE] |`
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    defaultContent: `## 4. Payment Terms

4.1. **Fee Structure:**
- Total Amount: [AMOUNT] [CURRENCY]
- Payment Schedule: [SPECIFY SCHEDULE]

4.2. **Payment Methods:**
Acceptable payment methods include:
- Bank Transfer
- Credit Card
- [OTHER METHODS]

4.3. **Late Payments:**
- Payments received after the due date will incur a late fee of [X]% per month
- Service Provider reserves the right to suspend services until payment is received`
  },
  {
    id: 'obligations',
    title: 'Rights and Responsibilities',
    defaultContent: `## 5. Rights and Responsibilities

5.1. **Service Provider Obligations:**
- Provide services as specified in Section 3
- Maintain professional standards
- Communicate promptly regarding progress
- [OTHER OBLIGATIONS]

5.2. **Client Obligations:**
- Provide necessary access and information
- Review and respond to requests promptly
- [OTHER OBLIGATIONS]`
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    defaultContent: `## 6. Confidentiality

6.1. Both parties agree to maintain the confidentiality of:
- Trade secrets
- Business processes
- Client information
- Proprietary technology
- Financial information

6.2. This obligation shall survive the termination of this Agreement for a period of [X] years.`
  },
  {
    id: 'termination',
    title: 'Termination',
    defaultContent: `## 7. Termination

7.1. **Termination with Notice:**
Either party may terminate this Agreement with [X] days written notice.

7.2. **Immediate Termination:**
This Agreement may be terminated immediately upon:
- Material breach of terms
- Bankruptcy or insolvency
- Mutual written agreement`
  },
  {
    id: 'disputes',
    title: 'Dispute Resolution',
    defaultContent: `## 8. Dispute Resolution

8.1. **Mediation:**
Parties agree to first attempt resolution through mediation in [LOCATION].

8.2. **Arbitration:**
If mediation fails, disputes shall be resolved through binding arbitration under [ARBITRATION BODY] rules.`
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    defaultContent: `## 9. Governing Law

9.1. This Agreement shall be governed by the laws of [JURISDICTION].
9.2. The courts of [JURISDICTION] shall have exclusive jurisdiction over any disputes.`
  },
  {
    id: 'signatures',
    title: 'Signatures',
    defaultContent: `## 10. Signatures

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

**For Client:**
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

**For Service Provider:**
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________`
  }
];
