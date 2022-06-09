// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';

export interface MehFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MehFilled: MehFilledIconType = (props, context) => <Icon name='MehFilled' {...{ ...props, ...context.attrs }} icon={MehFilledSvg} />;

MehFilled.displayName = 'MehFilled';

export default MehFilled;