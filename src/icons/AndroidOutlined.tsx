// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';

export interface AndroidOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AndroidOutlined: AndroidOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AndroidOutlinedSvg} />;

AndroidOutlined.displayName = 'AndroidOutlined';

export default AndroidOutlined;