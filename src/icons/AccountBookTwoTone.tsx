// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone';

export interface AccountBookTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AccountBookTwoTone: AccountBookTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AccountBookTwoToneSvg} />;

AccountBookTwoTone.displayName = 'AccountBookTwoTone';

export default AccountBookTwoTone;