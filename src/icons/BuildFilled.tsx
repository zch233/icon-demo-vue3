// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled';

export interface BuildFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BuildFilled: BuildFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BuildFilledSvg} />;

BuildFilled.displayName = 'BuildFilled';

export default FunctionalComponent;