// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';

export interface GithubFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GithubFilled: GithubFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GithubFilledSvg} />;

GithubFilled.displayName = 'GithubFilled';

export default GithubFilled;