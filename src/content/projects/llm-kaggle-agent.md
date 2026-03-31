---
title: "LLM-Kaggle-Agent：Kaggle 竞赛自动化"
date: "2025-03-01"
tags:
  - LLM
  - 多代理系统
  - 自动化
---

**角色：** 技术负责人

- **架构设计与多代理系统：** 采用 **Prompt Constructor**、**Code Tester** 与 **Evaluator** 三大代理协同工作，**Hybrid Data Module** 聚合竞赛元数据，**LLM Core** 并行调用 **GPT-4** 与 **DeepSeek-R1** 模型生成代码。
- **全流程自动化工作流：** 实现**竞赛识别**→**数据下载与解析**→**Prompt 构建**→**代码生成**→**沙箱执行**→**错误解析与重试**→**性能评估**→**自动提交**的闭环，兼容多种数据格式与评估指标。
- **关键结果与评估：** 在「**Natural Language Processing with Disaster Tweets**」竞赛中，**cross-entropy loss** 从 **0.045** 降至 **0.038**，**F1** 分数从 **0.78** 提升至 **0.81**；在 **8 项不同竞赛**中相对基线性能提升 **10%–133%**，「**AI in Respiratory Sounds**」最终排名前 **15%**。
