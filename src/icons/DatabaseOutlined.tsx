// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';

export interface DatabaseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DatabaseOutlined: DatabaseOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DatabaseOutlinedSvg} />;

DatabaseOutlined.displayName = 'DatabaseOutlined';

export default DatabaseOutlined;