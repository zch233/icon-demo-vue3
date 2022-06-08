// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';

export interface BackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BackwardFilled: BackwardFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BackwardFilledSvg} />;

BackwardFilled.displayName = 'BackwardFilled';

export default BackwardFilled;