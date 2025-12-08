# Hi there, I'm Viola. 👋

### Software Engineer | Distributed Systems & AI Infrastructure | ex-Nurse

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/viola-chyu-ab5b07112/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Cornell_Tech-firebrick?style=flat-square)](https://violachyu.github.io/violachyu/)

I'm a software engineer who went from debugging people to debugging computers; who went from ICU to APIs.

💡 **My superpower:**
* **The "Nurse" Mindset:** Reliability and availability over performance; I treat systems with a holistic view, but with "intensive care"-- obsessive attention to detail. 
* **Driven by Curiosity:** I start with "Why?" (then follow up with more "Why?s"). My clinical background trains me to diagnose the *real* user problem before translating it into code.
* **Rapid Prototyping:** Build ➔ Break ➔ Learn ➔ Iterate. I don't wait for "perfect"; I prioritize feedback-driven iteration, rapidly evolving prototypes into optimal solutions that fit the user.

💡 **My philosophy:** 
> "If life gives you lemonade, make lemons – and life will be all like 'whaaaaat?'" -- Phil Dunphy

I find **FUN** in impossible situations; actively chasing that sweet, satisfying "aha!" moment when fresh insights suddenly click!

---

### 🛠️ Tech Stack

| Domain | Stack |
| :--- | :--- |
| **Languages** | Python, C#, Java, Go, JavaScript/TypeScript, SQL |
| **Backend & Cloud** | Node.js, .NET/ASP.NET, Flask, Microservices, AWS, Azure |
| **Data & Infrastructure** | Kafka, RabbitMQ, PostgreSQL, Redis, MongoDB, Docker, Kubernetes |
| **AI & ML** | TensorFlow, PyTorch, OpenAI API, OpenCV, Pandas, NumPy |
| **DevOps & Tools** | Terraform, Jenkins, Grafana, Nginx, Git |

---

### 🚀 Featured Engineering Projects

**== AI & Data Science Engineering ==**

#### 🩺 Multi-Modal ML: Breast Cancer Classification - [Publication](https://drive.google.com/file/d/11j8wNc1OyOw3s487vgEz9Fu-wTaRmYnO/view?usp=sharing)
*AI-powered diagnostic pipeline integrating volumetric imaging with clinical data.*
* **Architecture:** Designed an ensemble learning system combining a custom **3D CNN** for volumetric MRI image analysis with **XGBoost** for structured clinical data.
* **Impact:** Achieved **84.46% accuracy**, outperforming single-model baselines by effectively fusing multi-modal data streams for enhanced medical diagnostics.
* **Tech:** Python, TensorFlow, Scikit-learn, Medical Imaging Processing.

#### 🎙️ Podcast ML: Listening Time Predictor - [Publication](https://drive.google.com/file/d/1dO0drn1sFkPo6DSGmGud3QLWyPa-YeY6/view?usp=drive_link)
* **Architecture:** Implemented and compared three custom regression models (MLR, Ridge, Polynomial) on **750k rows** of structured metadata, focusing on a lightweight, interpretable prediction pipeline.
* **Impact:** Achieved a strong predictive ceiling ($\mathbf{R}^2$ of 0.7920) and deployed a **Streamlit dashboard** that democratizes actionable content optimization insights for independent creators.
* **Tech:** Python, Streamlit, Multiple Regression Models (Custom/Scikit-learn/PyTorch), EDA/Preprocessing.

#### 🧘 High 5 Habit Trial: Behavioral Health Data Analysis - [Publication](https://drive.google.com/file/d/1dO0drn1sFkPo6DSGmGud3QLWyPa-YeY6/view?usp=drive_link)
* **Architecture:** Designed and executed a rigorous 6-week **A-B-B-A-B N-of-1 trial**; synthesized objective **Fitbit sensor data** (steps, HR) with daily subjective self-reports (mood, Pomodoros).
* **Impact:** **Modeled the intervention using dynamic logistic regression**, demonstrating a substantial positive causal impact on the probability of high activity levels and a moderate effect on productivity.
* **Tech:** Python, Dynamic Logistic Regression (Statsmodels), N-of-1 Trial Design, Data Synthesis.

---
**== Systems & Product Engineering ==**

#### 🎤 [StagePass: Real-Time Collaborative Karaoke](https://github.com/violachyu/stagepass)
*Real-time audio synchronization platform for distributed virtual performances.*
* **Architecture:** Engineered a low-latency event synchronization layer using **WebSockets** and **Next.js** to manage concurrent playlist queues and shared playback state across distributed clients.
* **Focus:** Overcame serverless infrastructure limitations (Vercel) by optimizing socket state management, ensuring seamless host/guest synchronization without persistent connections.
* **Tech:** Next.js, WebSockets, ThreeJS, Google OAuth, TailwindCSS.

#### 🧳 [PackSavvy: Context-Aware Travel Assistant](https://github.com/violachyu/PackSavvy) - [Publication](https://drive.google.com/file/d/1kzeTEOhFbNIHNimSmDTa9F-b_ydc1rnY/view?usp=drive_link)
*Mobile application transforming packing from a static checklist into a timeline-based workflow.*
* **Architecture:** Engineered a **dynamic list generation engine** that synthesizes destination, weather, and activity data to automate item decision-making. Designed a **temporal reminder system** for pre-trip logistics (e.g., regulations, home prep) to mitigate departure anxiety.
* **Impact:** Validated via **SUS (System Usability Scale)** testing, demonstrating reduced cognitive load and improved organization through modular record reusability.
* **Tech:** iOS Prototype, Context-Aware Algorithms, User-Centered Design.

#### 🦴 [Heelia: Low-Cost At-Home Bone Density Monitor](https://drive.google.com/file/d/10EKTTTJAKX8XrdTLG98al644NS47RJd6/view?usp=sharing) - [Publication](https://drive.google.com/file/d/1mJfVfMftXnASi8N3iPbSPNzMxnsPsgQN/view?usp=drive_link)
* **Architecture:** Engineered a **Quantitative Ultrasound (QUS)** hardware system driven by a **Raspberry Pi Pico (RP2040)** and a custom high-voltage driver circuit (~60Vpp) to measure calcaneal bone density.
* **Impact:** Democratized osteoporosis screening by developing a **radiation-free, low-cost (<$150) alternative** to DXA scans; validated usability and form factor through user-centered research with patients and clinicians.
* **Tech:** Raspberry Pi Pico (C/C++), PCB Design, Signal Processing, Autodesk Fusion 360, 3D Printing.

#### 💊 Smart Medication Assistant: AI Chatbot for Medication Guidance
*AgeTech solution leveraging Computer Vision and LLMs to improve medication adherence.*
* **Architecture:** Built a real-time interaction engine using **OpenCV** for OCR (prescription scanning) and the **OpenAI API** to process dosage instructions via a LINE chatbot interface.
* **Focus:** Reduced elderly user friction by automating complex data entry through visual inputs.
* **Tech:** Python, Flask, OpenAI API, OCR/Computer Vision.

---
**Certifications:**
- ☁️ [AWS Certified Machine Learning - Specialty](https://www.linkedin.com/in/viola-chyu-ab5b07112/details/certifications/1762232724049/single-media-viewer/?type=DOCUMENT&profileId=ACoAABxI2WkB-bNOxg359cSLbrbiBx_MHCNxjIM)
