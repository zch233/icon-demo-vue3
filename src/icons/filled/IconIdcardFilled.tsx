// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IdcardFilledSvg from '@ant-design/icons-svg/es/asn/IdcardFilled';

export interface IdcardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIdcardFilled: IdcardFilledIconType = (props, context) => (
    <Icon name='IdcardFilled' {...{ ...props, ...context.attrs }} icon={IdcardFilledSvg} />
);

IconIdcardFilled.displayName = 'IconIdcardFilled';

export default IconIdcardFilled;