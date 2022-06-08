// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GithubOutlinedSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined';

export interface GithubOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GithubOutlined: GithubOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GithubOutlinedSvg} />;

GithubOutlined.displayName = 'GithubOutlined';

export default GithubOutlined;