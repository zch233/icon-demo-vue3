// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';

export interface UnlockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UnlockOutlined: UnlockOutlinedIconType = (props, context) => <Icon name='UnlockOutlined' {...{ ...props, ...context.attrs }} icon={UnlockOutlinedSvg} />;

UnlockOutlined.displayName = 'UnlockOutlined';

export default UnlockOutlined;