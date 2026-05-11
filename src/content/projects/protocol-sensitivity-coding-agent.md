---
title: "Protocol Sensitivity in Coding-Agent Evaluation（投递中）"
date: "2026-03-01"
tags:
  - Coding Agent
  - 评测协议
  - Verifier-driven RL
---

**角色：** 技术负责人

- **项目目的：** 面向代码 Agent 在代码审查与自动修复中的可靠性评估问题，为探究哪些因素可能导致代码检查质量提升及优化，系统分析 **context regime**、**workflow**、**verification depth** 与 **budget accounting** 对模型可信度、验证成本和评测结论的影响。
- **实验平台建设：** 主导搭建 Python-first 实验框架 **ed_eval**，统一数据适配、上下文构造、Agent 推理、**V0--V3** 验证流水线、repair harness 与指标分析模块；支持 **c-CRAB**、**SWE-bench Lite / SWE-Verified** 风格任务及 diff-only / structured / full-raw、single-agent / self-refine / verification-pipeline 等协议消融。
- **Verifier-driven RL 优化：** 实现 Qwen2.5-Coder-7B-Instruct 的 LoRA + GRPO 训练链路，采用 DAPO-style 分层奖励，将 JSON patch 解析、patch 提取、patch apply 与 VerificationPipeline accepted signal 接入 reward function；在 SWE-Verified smoke20 的 oracle harness 上完成 80 条组合记录验证，pass@1、resolved rate 与 patch-applied rate 均为 **98.75%**，平均 generation / verification / total calls 为 **1.5 / 3.0 / 4.5**；已配置 SWE-Verified 50-task docker harness 的 base vs. LoRA 同切片评测，用于后续报告真实 pass@1、resolved rate 与 timeout/error rate。
