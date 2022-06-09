// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';

export interface SolutionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SolutionOutlined: SolutionOutlinedIconType = (props, context) => <Icon name='SolutionOutlined' {...{ ...props, ...context.attrs }} icon={SolutionOutlinedSvg} />;

SolutionOutlined.displayName = 'SolutionOutlined';

export default SolutionOutlined;