Docker builds and packages applications
into containers.
	Used by developers to package apps consistently.

A container runs your application with all dependencies.
	Used to run apps the same on laptop, server, or cloud.

A Pod groups one or more containers together.
	Used by Kubernetes to deploy applications.
Kubernetes.
	Used to run and scale production applications

Quick deployment:

FrontEnd:
	Next.JS
	TypeScript
	Tailwind
	Vercel
	Railway (not free)
	Domain (not free)
BackeEnd:
	fly.io
	FastAPI
DataBase & Auth:
	Supabase
	Convex
	Better-Auth
Payment:
	Stripe (2.9% + $0.3)
Marketing:
	Resend
	PostHog

Apps:
AWS EC2 (host), AWS ECS (scale) CLoud watch (logging and monitoring)
Self host, Kubernetes, Prometheus + Grafana

AI Agents:
use a logging testing validation, loops and acceptance criteria.
loop and Cron jobs allowing you to chat to Claude code via telegram with a short loop and schedule tasks to replicate open claw functionality

Pre-deployment checklist for your web app:
auth/authorization so users only access what they’re supposed to, input validation and sanitization so bad data and attacks do not slip through, CORS so only approved origins can talk to your API, rate limiting so spam does not crush your backend, expiring password reset links so old emails cannot become account takeovers, frontend error handling so users see clean fallback states instead of crashes, database indexes so your key queries stay fast, logging so you can see what broke in production, alerts so you hear about issues before your users do, and rollback so one bad deploy does not turn into a full incident.

import videos through ffmpeg as frames to code to make animations as website scrolling interactive background

Ctrl+U + website screenshots to ask AI to mimic the website and create an own's

Database choice:
SQL (e.g., PostgreSQL, MySQL): For Money & Precision!

Pros: Guarantees ACID properties (Atomicity, Consistency, Isolation, Durability). This means your data is always perfectly reliable and consistent, like bank transactions.
Cons: Less flexible for rapidly changing data, scales vertically (expensive).

NoSQL (e.g., MongoDB, Cassandra): For Speed & Scale!

Pros: Prioritizes the CAP Theorem (Consistency, Availability, Partition Tolerance), usually sacrificing strong consistency for massive scale and availability. Great for real-time data or social feeds where minor inconsistencies are acceptable.
Cons: Can lead to "eventual consistency" (data might not be perfectly up-to-date everywhere instantly).


Fine-tunning Model:
Fine tuning a 20 billion parameter model on 75,000 domain specific examples.
The base model starts generic. Every financial question returns surface level retail content. The goal is to shift billions of weights until every response reflects institutional grade quantitative analysis.
We load the full 20B parameters across dual GPUs. LoRA adapters sit inside the attention blocks, updating a controlled fraction of the weight matrix. 190GB of VRAM holds batch sizes of 15, which most setups cannot sustain.
75,000 instruction response pairs. One full epoch. Three and a half hours of gradient descent.
Before training: vague, generalised output. After training: statistical reasoning, drawdown mechanics, volatility regime context. No more retail noise.

Download model
Download from hugg
deploy in docker container (optimized for CUDA, and dual gpu setup)
LoRa adapters for fraction weight update
When someone says “RAG over millions of PDFs”, they’re really asking about a search system + LLM, not a vector DB demo.
I’d break it into five parts: ingestion, embeddings, retrieval, generation, and monitoring.
1️⃣ Ingestion is offline, not request-time
At this scale, ingestion must be async.
➤ Stream PDFs from object storage (S3/GCS)
➤ OCR only when needed
➤ Normalize to clean text
➤ Chunk meaningfully (≈512–2k tokens with overlap)
➤ Attach rich metadata: doc ID, page, section, product, timestamp
None of this runs in the user path.
2️⃣ Embeddings + index built for scale
You don’t embed on demand.
➤ Dedicated embedding jobs (GPU or batched)
➤ Distributed ANN index (Milvus, Qdrant, Vespa, Elastic)
➤ Sharding + HNSW / IVF / PQ for tens of millions of vectors
➤ Metadata stored alongside vectors
Metadata filtering is the first gate — vector search is the fallback.
3️⃣ Tight online retrieval + generation
The request path stays minimal:
query → metadata filter → cache → ANN search → rerank → LLM
➤ Most queries are narrowed by metadata before vector search
➤ Many never hit the vector DB at all
➤ Rerank only a small candidate set
➤ Send just 5–10 chunks to the LLM
More chunks usually hurt.
4️⃣ Where caching actually fits
Caching controls cost and p95 latency.
➤ Query → answer cache (FAQs, repeats)
➤ Query → retrieval cache (top-k chunk IDs)
➤ Index / data cache (hot vectors + parsed PDFs)
Real path becomes:
query → cache → (miss) retrieve + LLM → write back
5️⃣ Monitoring closes the loop
Without this, drift is silent.
➤ Retrieval quality (recall@k)
➤ Answer quality / feedback
➤ Latency + cache hit rates
➤ Re-embed and re-shard as data or models change
BOTTOM LINE:
RAG at this scale isn’t an LLM problem.
It’s a metadata-first search + caching architecture problem.