"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footers() {
	return (
		<footer className="w-full border-t bg-background">
			<div className="max-w-screen-xl mx-auto px-6 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* 로고 및 소개 */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5c0 .526-.27.988-.659 1.256a6.012 6.012 0 01-2.708 1.912A6.003 6.003 0 014.332 8.027z" clipRule="evenodd" />
							</svg>
							<span className="font-bold text-xl">Web3 DApp</span>
						</div>
						<p className="text-muted-foreground">
							차세대 블록체인 기술로 구축된 탈중앙화 애플리케이션으로, 안전하고 투명한 디지털 경험을 제공합니다.
						</p>
						<div className="flex space-x-4">
							<Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
								<Github size={20} />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
								<Twitter size={20} />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
								<Linkedin size={20} />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>

					{/* 서비스 */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg">서비스</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									지갑 연결
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									NFT 마켓플레이스
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									토큰 스왑
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									DeFi 대시보드
								</Link>
							</li>
						</ul>
					</div>

					{/* 리소스 */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg">리소스</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									개발자 문서
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									API 레퍼런스
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									튜토리얼
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									백서
								</Link>
							</li>
						</ul>
					</div>

					{/* 회사 */}
					<div className="space-y-4">
						<h3 className="font-semibold text-lg">회사</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									소개
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									블로그
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									채용
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
									연락처
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} Web3 DApp. All rights reserved.
					</p>
					<div className="flex space-x-6">
						<Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
							이용약관
						</Link>
						<Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
							개인정보처리방침
						</Link>
						<Link href="/cookie" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
							쿠키 정책
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}