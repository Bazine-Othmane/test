# Comprehensive Instagram Influencer Evaluation Framework

This report outlines a robust framework for evaluating Instagram influencers in the 50K–300K follower range. It includes both quantitative and qualitative metrics that are normalized and weighted to produce a composite score between 0 and 1. By focusing on key performance indicators—ranging from engagement quality (measured by views) to audience authenticity and sentiment—we can objectively assess an influencer’s overall impact and suitability for your brand partnerships.

---

## 1. Engagement Rate by Post (by Views)

**Definition:**  
This metric shows the percentage of viewers who interact with a specific post. It considers likes, comments, shares, and saves. Instead of using total followers as the denominator, we use the total number of views on that post to capture the quality of engagement among those who actually saw it.

**Formula:**  
\[
\text{ER}_{\text{post}} = \left(\frac{\text{Total Engagements on a Post}}{\text{Total Views on the Post}}\right) \times 100
\]

**Benchmark Range (50K–300K Followers):**  
- **5%–10%**  
  - Rates toward 8–10% are considered excellent.  
  - Rates around 5–7% indicate healthy engagement.

**Weight: 27%**  
*Explanation:*  
Since this metric directly reflects how compelling the content is for the audience who viewed it, it is the most important factor in our composite score.

*References:*  
:contentReference[oaicite:0]{index=0}  
:contentReference[oaicite:1]{index=1}

---

## 2. Impressions

**Definition:**  
Impressions represent the total number of times a post is shown on users’ screens—even if the same user sees it multiple times.

**How to Use:**  
Data for impressions is provided directly by Instagram Insights and reflects overall content visibility.

**Benchmark Range:**  
- Successful posts generate roughly **1.5× to 3× the follower count** in impressions.  
  - For example, a 100K‑follower account might get 150K to 300K impressions on a high‑performing post.

**Weight: 5%**  
*Explanation:*  
Impressions indicate exposure but do not differentiate unique viewers. Thus, they contribute less to our overall score.

*References:*  
:contentReference[oaicite:2]{index=2}

---

## 3. Reach

**Definition:**  
Reach is the number of unique users who have seen a post.

**How to Use:**  
Reach data is available in Instagram Insights and is critical since not every follower sees every post.

**Benchmark Range:**  
- Typically, successful posts reach **60%–80%** of the total follower count.  
  - For instance, a 100K‑follower account might reach 60K to 80K unique users.

**Weight: 9%**  
*Explanation:*  
Reach gives a measure of unique exposure and helps assess the effectiveness of content distribution, though it is more influenced by algorithmic factors.

*References:*  
:contentReference[oaicite:3]{index=3}

---

## 4. Audience Growth Rate

**Definition:**  
This metric measures how quickly an influencer’s follower count increases over a given period.

**Formula:**  
\[
\text{Audience Growth Rate (\%)} = \left(\frac{\text{New Followers Gained}}{\text{Starting Follower Count}}\right) \times 100
\]

**Benchmark Range:**  
- A monthly growth rate of **2%–5%** is generally considered strong.

**Weight: 13%**  
*Explanation:*  
Growth rate indicates ongoing audience interest and future reach potential, making it essential for long‑term success.

*References:*  
:contentReference[oaicite:4]{index=4}

---

## 5. Average Views per Reel

**Definition:**  
This metric shows the average number of views each Reel receives.

**Formula:**  
\[
\text{Average Reel Views} = \frac{\text{Total Reel Views}}{\text{Number of Reels Posted}}
\]

**Benchmark Range:**  
- For influencers with 50K–300K followers, each Reel should garner **5%–15% of the follower count** in views.  
  - For example, a 100K‑follower influencer might achieve 5,000 to 15,000 views per Reel.

**Weight: 13%**  
*Explanation:*  
Given the growing importance of video content on Instagram, average Reel views are crucial for understanding content impact.

*References:*  
:contentReference[oaicite:5]{index=5}

---

## 6. Audience Quality (Fake Follower Ratio)

**Definition:**  
This ratio estimates the percentage of an influencer’s followers that are likely fake (bots or non‑genuine accounts).

**Formula:**  
\[
\text{Fake Follower Ratio (\%)} = \left(\frac{\text{Estimated Fake Followers}}{\text{Total Followers}}\right) \times 100
\]

**Benchmark Range:**  
- A healthy influencer typically has a fake follower ratio of **under 10%**.

**Weight: 23%**  
*Explanation:*  
Authenticity is critical; a lower fake follower ratio means that the engagement metrics are more reliable. This metric is heavily weighted to ensure that an influencer’s audience is genuine.

*References:*  
:contentReference[oaicite:6]{index=6}  
:contentReference[oaicite:7]{index=7}

---

## 7. Sentiment Analysis (Based on Comments)

**Definition:**  
This metric calculates the average sentiment score of an influencer’s post comments. Each comment is analyzed using a sentiment analysis algorithm that assigns a score on a scale from –1 (very negative) to +1 (very positive). The average sentiment score is then normalized to a scale between 0 and 1 using the transformation:
\[
\text{Normalized Sentiment} = \frac{(\text{Average Sentiment Score} + 1)}{2}
\]
A higher normalized sentiment indicates a more positive audience reaction.

**Benchmark Range:**  
- Successful influencers typically achieve a normalized sentiment score of **0.6 or higher**.

**Weight: 10%**  
*Explanation:*  
Sentiment analysis adds qualitative depth by capturing the emotional tone of audience interactions. It confirms that engagement is accompanied by positive perceptions, which is crucial for brand health.

---

## Normalization of Raw Metric Values

Because the raw numbers for each metric can vary widely, we use a normalization function to convert each metric value into a standardized score between 0 and 1. For any metric with a raw value \( X \), and with \( M_{\text{min}} \) and \( M_{\text{max}} \) as its boundary (benchmark minimum and maximum), we compute:
\[
N = \frac{X - M_{\text{min}}}{M_{\text{max}} - M_{\text{min}}}
\]
Then, the final normalized score is given by:
\[
\text{Normalized}(X) =
\begin{cases}
0, & \text{if } N < 0 \\
1 - \exp\left(-\frac{\sqrt{N}}{\sigma}\right), & \text{if } N \geq 0
\end{cases}
\]
where \( \sigma \) is a constant (default \( \sigma = 0.3 \)).

*Explanation:*  
This function converts each raw metric \( X \) into a value between 0 and 1 based directly on its established minimum and maximum benchmarks. The exponential smoothing ensures that values near the minimum yield scores close to 0, while values near or above the maximum approach 1.

---

## Composite Score Calculation

For each influencer:
1. **Calculate each raw metric** using the formulas above.
2. **Normalize each metric** with the normalization function (using \( M_{\text{min}} \) and \( M_{\text{max}} \) as the boundaries).
3. **Apply the following weights:**
   - Engagement Rate by Post (by Views): **27%**  
   - Impressions: **5%**  
   - Reach: **9%**  
   - Audience Growth Rate: **13%**  
   - Average Views per Reel: **13%**  
   - Audience Quality (Fake Follower Ratio): **23%** (use \(1 -\) normalized value so that a lower fake follower ratio yields a higher score)  
   - Sentiment Analysis: **10%**

4. **Compute the Composite Score:**  
   \[
   \begin{aligned}
   \text{Composite Score} = & \, 0.27 \times \text{Normalized ER (by Views)} \\
   & + 0.05 \times \text{Normalized Impressions} \\
   & + 0.09 \times \text{Normalized Reach} \\
   & + 0.13 \times \text{Normalized Growth Rate} \\
   & + 0.13 \times \text{Normalized Reel Views} \\
   & + 0.23 \times \bigl(1 - \text{Normalized Fake Follower Ratio}\bigr) \\
   & + 0.10 \times \text{Normalized Sentiment}
   \end{aligned}
   \]
   This final score, between 0 and 1, provides an overall rating of an influencer’s performance on Instagram based on both quantitative and qualitative metrics.

---

## Final Benchmark Ranges (for 50K–300K Followers)

- **Engagement Rate by Post (by Views):** 5%–10%
- **Impressions:** 1.5×–3× the follower count per post
- **Reach:** 60%–80% of total followers
- **Audience Growth Rate:** 2%–5% monthly
- **Average Reel Views:** 5%–15% of follower count per Reel
- **Audience Quality (Fake Follower Ratio):** Under 10%
- **Sentiment Analysis (Normalized):** Ideally 0.6–1.0

---

This framework—with the added sentiment analysis metric based on comments—provides a comprehensive and objective method for rating influencers. The normalization function ensures that each metric is measured on a comparable scale, and the weighted composite score captures both engagement effectiveness and audience authenticity. This approach will help you select influencers who are not only performing well quantitatively but also generating positive, genuine interactions with their audience.
