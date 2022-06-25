// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookTwoToneSvg from 'icon-base/es/asn/AccountBookTwoTone';

export interface AccountBookTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAccountBookTwoTone: AccountBookTwoToneIconType = (props, context) => (
    <Icon name='AccountBookTwoTone' {...{ ...props, ...context.attrs }} icon={AccountBookTwoToneSvg} />
);

IconAccountBookTwoTone.displayName = 'IconAccountBookTwoTone';
IconAccountBookTwoTone.theme = 'twotone';
IconAccountBookTwoTone.originName = 'account-book';

export default IconAccountBookTwoTone;
