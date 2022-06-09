// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/es/asn/AccountBookTwoTone';

export interface AccountBookTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAccountBookTwoTone: AccountBookTwoToneIconType = (props, context) => (
    <Icon name='AccountBookTwoTone' {...{ ...props, ...context.attrs }} icon={AccountBookTwoToneSvg} />
);

IconAccountBookTwoTone.displayName = 'IconAccountBookTwoTone';

export default IconAccountBookTwoTone;